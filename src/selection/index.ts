import { appConfigFactory, AppConfig } from '@/app-config'
import { message } from '@/_helpers/browser-api'
import { isContainChinese, isContainEnglish } from '@/_helpers/lang-check'
import { createAppConfigStream } from '@/_helpers/config-manager'
import * as selection from '@/_helpers/selection'
import { MsgType, PostMsgType, PostMsgSelection, MsgSelection, MsgIsPinned } from '@/typings/message'
import { Mutable } from '@/typings/helpers'

// import { Observable, fromEvent, timer, merge, of, asyncScheduler } from 'rxjs'
// import { map, mapTo, scan, filter, take, switchMap, buffer, debounceTime, observeOn, share, distinctUntilChanged } from 'rxjs/operators'
import { Observable } from 'rxjs/Observable'
import { fromEvent } from 'rxjs/observable/fromEvent'
import { timer } from 'rxjs/observable/timer'
import { merge } from 'rxjs/observable/merge'
import { of } from 'rxjs/observable/of'
import { map } from 'rxjs/operators/map'
import { delay } from 'rxjs/operators/delay'
import { mapTo } from 'rxjs/operators/mapTo'
import { scan } from 'rxjs/operators/scan'
import { filter } from 'rxjs/operators/filter'
import { take } from 'rxjs/operators/take'
import { switchMap } from 'rxjs/operators/switchMap'
import { buffer } from 'rxjs/operators/buffer'
import { debounceTime } from 'rxjs/operators/debounceTime'
import { share } from 'rxjs/operators/share'
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged'
import { startWith } from 'rxjs/operators/startWith'
import { pluck } from 'rxjs/operators/pluck'
import { combineLatest } from 'rxjs/observable/combineLatest'

message.addListener(MsgType.__PreloadSelection__, () => {
  return Promise.resolve(selection.getSelectionInfo())
})

/** Pass through message from iframes */
window.addEventListener('message', ({ data, source }: { data: PostMsgSelection, source: Window | null }) => {
  if (data.type !== PostMsgType.Selection) { return }

  // get the souce iframe
  const iframe = Array.from(document.querySelectorAll('iframe'))
    .find(({ contentWindow }) => contentWindow === source)
  if (!iframe) { return }

  const { left, top } = iframe.getBoundingClientRect()
  const msg: Mutable<typeof data> = data
  msg.mouseX = msg.mouseX + left
  msg.mouseY = msg.mouseY + top
  sendMessage(msg)
})

let config = appConfigFactory()
createAppConfigStream().subscribe(newConfig => config = newConfig)

let clickPeriodCount = 0
let lastMousedownTarget: EventTarget | null

/**
 * Pressing ctrl/command key more than three times within 500ms
 * trigers TripleCtrl
 */
const validCtrlPressed$$ = isKeyPressed(isCtrlKey).pipe(
  filter(Boolean),
  share(),
)

validCtrlPressed$$.pipe(
  buffer(debounceTime(500)(validCtrlPressed$$)),
  filter(group => group.length >= 3),
).subscribe(() => {
  message.self.send({ type: MsgType.TripleCtrl })
})

/**
 * Track the last mousedown target for identifying input field, if needed.
 */
merge(
  fromEvent<MouseEvent>(window, 'mousedown', { capture: true }),
  fromEvent<TouchEvent>(window, 'touchstart', { capture: true }),
).subscribe(({ target }) => {
  lastMousedownTarget = target
})

/**
 * A valid mouseup:
 * 1. Not in Saladict iframe.
 * 2. Event target is not a Saladict exposed element.
 */
const validMouseup$$ = merge(
  fromEvent<MouseEvent>(window, 'mouseup', { capture: true }),
  fromEvent<TouchEvent>(window, 'touchend', { capture: true }).pipe(
    map(e => e.changedTouches[0])
  ),
).pipe(
  filter(({ target }) => {
    if (window.name === 'saladict-frame') {
      return false
    }

    if (target) {
      if (typeof target['className'] === 'string' &&
          (target['className'] as string).includes('saladict-')
      ) {
        return false
      }
    }

    return true
  }),
  // if user click on a selected text,
  // getSelection would reture the text before the highlight disappears
  // delay to wait for selection get cleared
  delay(10),
  share(),
)

/**
 * Count mouse click within a period
 */
merge(
  mapTo(true)(validMouseup$$),
  switchMap(() => timer(config.doubleClickDelay).pipe(take(1), mapTo(false)))(validMouseup$$)
).pipe(
  scan((sum: number, flag: boolean) => flag ? sum + 1 : 0, 0)
).subscribe(count => {
  clickPeriodCount = count
})

/**
 * Escape key pressed
 */
isKeyPressed(isEscapeKey).subscribe(flag => {
  if (flag) {
    message.self.send({ type: MsgType.EscapeKey })
  }
})

let lastText: string
let lastContext: string
validMouseup$$.subscribe(event => {
  if (config.noTypeField && isTypeField(lastMousedownTarget)) {
    sendEmptyMessage()
    return
  }

  const text = selection.getSelectionText()
  if (
    text && (
      (config.language.english && isContainEnglish(text) && !isContainChinese(text)) ||
      (config.language.chinese && isContainChinese(text))
    )
  ) {
    const context = selection.getSelectionSentence()
    if (text === lastText && context === lastContext && clickPeriodCount < 2) {
      // (Ignore this rule if it is a double click.)
      // Same selection. This could be caused by other widget on the page
      // that uses preventDefault which stops selection being cleared when clicked.
      // Ignore it so that the panel won't follow.
      return
    }
    lastContext = context

    sendMessage({
      mouseX: event.clientX,
      mouseY: event.clientY,
      dbClick: clickPeriodCount >= 2,
      ctrlKey: Boolean(event['metaKey'] || event['ctrlKey']),
      selectionInfo: {
        text: selection.getSelectionText(),
        context,
        title: window.pageTitle || document.title,
        url: window.pageURL || document.URL,
        favicon: window.faviconURL || '',
        trans: '',
        note: ''
      },
    })
  } else {
    lastContext = ''
    sendEmptyMessage()
  }
  // always update text
  lastText = text
})

/**
 * Cursor Instant Capture
 */
combineLatest(
  createAppConfigStream(),
  message.self.createStream<MsgIsPinned>(MsgType.IsPinned).pipe(
    pluck<MsgIsPinned, MsgIsPinned['isPinned']>('isPinned'),
    startWith(false),
  ),
).pipe(
  map(([config, isPinned]) => {
    return [
      config[isPinned ? 'pinMode' : 'mode'].instant,
      config.insCapDelay
    ] as [AppConfig['mode']['instant'] | AppConfig['pinMode']['instant'], number]
  }),
  distinctUntilChanged((oldVal, newVal) => oldVal[0] === newVal[0] && oldVal[1] === newVal[1]),
  switchMap(([instant, insCapDelay]) => {
    if (!instant || window.name === 'saladict-frame') { return of(undefined) }
    return merge(
      fromEvent<MouseEvent>(window, 'mouseout', { capture: true }).pipe(mapTo(undefined)),
      fromEvent<MouseEvent>(window, 'mousemove', { capture: true }).pipe(map(e => {
        if ((instant === 'direct' && !(e.ctrlKey || e.metaKey || e.altKey)) ||
            (instant === 'alt' && e.altKey) ||
            (instant === 'ctrl' && (e.ctrlKey || e.metaKey))
        ) {
          // harmless side effects
          selectCusorWord(e)
          return e
        }
        return undefined
      }),
    )).pipe(
      debounceTime(insCapDelay),
    )
  }),
  filter((e): e is MouseEvent => e as any as boolean),
  map<MouseEvent, [MouseEvent, string, string]>(e => [
    e,
    selection.getSelectionText(),
    selection.getSelectionSentence(),
  ]),
  distinctUntilChanged((oldVal, newVal) => oldVal[1] === newVal[1] && oldVal[2] === newVal[2]),
).subscribe(([event, text, context]) => {
  if (text) {
    sendMessage({
      mouseX: event.clientX,
      mouseY: event.clientY,
      instant: true,
      selectionInfo: {
        text,
        context,
        title: window.pageTitle || document.title,
        url: window.pageURL || document.URL,
        favicon: window.faviconURL || '',
        trans: '',
        note: ''
      },
    })
  }
})

/*-----------------------------------------------*\
    Helpers
\*-----------------------------------------------*/

function sendMessage (
  msg: {
    selectionInfo: selection.SelectionInfo
    mouseX: number
    mouseY: number
    dbClick?: boolean
    ctrlKey?: boolean
    instant?: boolean
  }
) {
  if (window.parent === window) {
    // top
    if (process.env.NODE_ENV === 'development') {
      console.log('New selection', msg)
    }

    message.self.send<MsgSelection>({
      ...msg,
      type: MsgType.Selection,
    })
  } else {
    // post to upper frames/window
    window.parent.postMessage({
      ...msg,
      type: PostMsgType.Selection,
    } as PostMsgSelection, '*')
  }
}

function sendEmptyMessage () {
  // empty message
  const msg: MsgSelection = {
    type: MsgType.Selection,
    selectionInfo: {
      text: '',
      context: '',
      title: window.pageTitle || document.title,
      url: window.pageURL || document.URL,
      // set by browser-api helper
      favicon: window.faviconURL || '',
      trans: '',
      note: ''
    },
    mouseX: 0,
    mouseY: 0,
    dbClick: false,
    ctrlKey: false,
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('New selection', msg)
  }

  message.self.send(msg)
}

/**
 * Is ctrl/command button pressed
 */
function isCtrlKey (evt: KeyboardEvent): boolean {
  return evt.key === 'Control' || evt.key === 'Meta'
}

/**
 * Is esc button pressed
 */
function isEscapeKey (evt: KeyboardEvent): boolean {
  return evt.key === 'Escape'
}

function isKeyPressed (keySelectior: (e: KeyboardEvent) => boolean): Observable<boolean> {
  return distinctUntilChanged<boolean>()(
    merge(
      map(keySelectior)(fromEvent<KeyboardEvent>(window, 'keydown', { capture: true })),
      mapTo(false)(fromEvent(window, 'keyup', { capture: true })),
      mapTo(false)(fromEvent(window, 'blur', { capture: true })),
      of(false)
    )
  )
}

function isTypeField (traget: EventTarget | null): boolean {
  if (traget) {
    if (traget['tagName'] === 'INPUT' || traget['tagName'] === 'TEXTAREA') {
      return true
    }

    const editorTester = /CodeMirror|ace_editor/
    // Popular code editors CodeMirror and ACE
    for (let el = traget as Element | null; el; el = el.parentElement) {
      // With CodeMirror the `pre.CodeMirror-line` somehow got detached when the event
      // triggerd. So el will never reach the root `.CodeMirror`.
      if (editorTester.test(el.className)) {
        return true
      }
    }
  }

  return false
}

/**
 * Select the word under the cursor position
 */
function selectCusorWord (e: MouseEvent): void {
  const x = e.clientX
  const y = e.clientY

  let offsetNode: Node
  let offset: number

  const sel = window.getSelection()
  sel.removeAllRanges()

  if (document['caretPositionFromPoint']) {
    const pos = document['caretPositionFromPoint'](x, y)
    offsetNode = pos.offsetNode
    offset = pos.offset
  } else if (document['caretRangeFromPoint']) {
    const pos = document['caretRangeFromPoint'](x, y)
    offsetNode = pos.startContainer
    offset = pos.startOffset
  } else {
    return
  }

  if (offsetNode.nodeType === Node.TEXT_NODE) {
    const textNode = offsetNode as Text
    const content = textNode.data
    const head = (content.slice(0, offset).match(/[-_a-z]+$/i) || [''])[0]
    const tail = (content.slice(offset).match(/^([-_a-z]+|[\u4e00-\u9fa5])/i) || [''])[0]
    if (head.length <= 0 && tail.length <= 0) {
      return
    }

    const range = document.createRange()
    range.setStart(textNode, offset - head.length)
    range.setEnd(textNode, offset + tail.length)
    const rangeRect = range.getBoundingClientRect()

    if (rangeRect.left <= x &&
        rangeRect.right >= x &&
        rangeRect.top <= y &&
        rangeRect.bottom >= y
    ) {
      sel.addRange(range)
    }

    range.detach()
  }
}

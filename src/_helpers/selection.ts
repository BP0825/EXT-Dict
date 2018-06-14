/**
 * Selection Helper
 */

const INLINE_TAGS = new Set([
  // Inline text semantics
  'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn', 'em', 'i',
  'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'small',
  'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr'
])

export function hasSelection (win = window): boolean {
  return Boolean(win.getSelection().toString().trim())
}

export function getSelectionText (win = window): string {
  return cleanText(win.getSelection().toString())
}

// match head                 a.b is ok    chars that ends a sentence
const sentenceHeadTester = /((\.(?![ .]))|[^.?!。？！…])+$/
// match tail                                                    for "..."
const sentenceTailTester = /^((\.(?![ .]))|[^.?!。？！…])*([.?!。？！…]){0,3}/

/** Returns the sentence containing the selection text */
export function getSelectionSentence (win = window): string {
  const selection = win.getSelection()
  const selectedText = selection.toString()
  if (!selectedText.trim()) { return '' }

  let sentenceHead = ''
  let sentenceTail = ''

  const anchorNode = selection.anchorNode
  if (anchorNode.nodeType === Node.TEXT_NODE) {
    let leadingText = anchorNode.textContent || ''
    if (leadingText) {
      leadingText = leadingText.slice(0, selection.anchorOffset)
    }
    for (let node = anchorNode.previousSibling; node; node = node.previousSibling) {
      if (node.nodeType === Node.TEXT_NODE) {
        leadingText = node.textContent + leadingText
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        leadingText = (node as HTMLElement).innerText + leadingText
      }
    }

    for (
      let element = anchorNode.parentElement;
      element && INLINE_TAGS.has(element.tagName.toLowerCase()) && element !== document.body;
      element = element.parentElement
    ) {
      for (let el = element.previousElementSibling; el; el = el.previousElementSibling) {
        leadingText = (el as HTMLElement).innerText + leadingText
      }
    }

    sentenceHead = (leadingText.match(sentenceHeadTester) || [''])[0]
  }

  const focusNode = selection.focusNode
  if (selection.focusNode.nodeType === Node.TEXT_NODE) {
    let tailingText = selection.focusNode.textContent || ''
    if (tailingText) {
      tailingText = tailingText.slice(selection.focusOffset)
    }
    for (let node = focusNode.nextSibling; node; node = node.nextSibling) {
      if (node.nodeType === Node.TEXT_NODE) {
        tailingText += node.textContent
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        tailingText += (node as HTMLElement).innerText
      }
    }

    for (
      let element = focusNode.parentElement;
      element && INLINE_TAGS.has(element.tagName.toLowerCase()) && element !== document.body;
      element = element.parentElement
    ) {
      for (let el = element.nextElementSibling; el; el = el.nextElementSibling) {
        tailingText += (el as HTMLElement).innerText
      }
    }

    sentenceTail = (tailingText.match(sentenceTailTester) || [''])[0]
  }

  return cleanText(sentenceHead + selectedText + sentenceTail)
}

export type SelectionInfo = Readonly<SelectionInfoMutable>

export interface SelectionInfoMutable {
  /** selection text */
  text: string
  /** the sentence where the text string is located */
  context: string
  /** page title */
  title: string
  /** page url */
  url: string
  /** favicon url */
  favicon: string
  /** translation */
  trans: string
  /** custom note */
  note: string
}

export function getDefaultSelectionInfo (extra: Partial<SelectionInfo> = {}): SelectionInfo {
  return {
    text: '',
    context: '',
    title: '',
    url: '',
    favicon: '',
    trans: '',
    note: '',
    ...extra,
  }
}

export function isSameSelection (a: SelectionInfo, b: SelectionInfo) {
  return a && b && a.text === b.text && a.context === b.context
}

export function getSelectionInfo (): SelectionInfo {
  return {
    text: getSelectionText(),
    context: getSelectionSentence(),
    title: window.pageTitle || document.title,
    url: window.pageURL || document.URL,
    // set by chrome-api helper
    favicon: window.faviconURL || '',
    trans: '',
    note: '',
  }
}

function cleanText (text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

import { storage, openURL, StorageUpdate } from '@/_helpers/browser-api'
import { AppConfig } from '@/app-config'
import i18nLoader from '@/_helpers/i18n'
import { TranslationFunction } from 'i18next'
import contextLocles from '@/_locales/context'
import isEqual from 'lodash/isEqual'

import { Observable, ReplaySubject, combineLatest } from 'rxjs'
import { mergeMap, filter, map, audit, mapTo, share, startWith } from 'rxjs/operators'

type ContextMenusConfig = AppConfig['contextMenus']

interface CreateMenuOptions {
  type?: browser.contextMenus.ItemType,
  id?: string
  title?: string
  contexts?: browser.contextMenus.ContextType[]
}

// singleton
let setMenus$$: Observable<void>

const i18n$$ = new ReplaySubject<TranslationFunction>(1)
const i18n = i18nLoader({ context: contextLocles }, 'context', (_, t) => i18n$$.next(t))
i18n.on('languageChanged', () => i18n$$.next(i18n.t.bind(i18n)))

browser.contextMenus.onClicked.addListener(info => {
  const menuItemId = info.menuItemId
  const selectionText = info.selectionText || ''
  const linkUrl = info.linkUrl || ''
  switch (menuItemId) {
    case 'google_page_translate':
      browser.tabs.query({ active: true, currentWindow: true })
        .then(tabs => {
          if (tabs.length > 0) {
            openURL(`https://translate.google.com/translate?sl=auto&tl=zh-CN&js=y&prev=_t&ie=UTF-8&u=${tabs[0].url}&edit-text=&act=url`)
          }
        })
      break
    case 'youdao_page_translate':
      // inject youdao script, defaults to the active tab of the current window.
      browser.tabs.executeScript({ file: '/static/fanyi.youdao.2.0/main.js' })
        .then(result => {
          if (!result || (result as any !== 1 && result[0] !== 1)) {
            throw new Error()
          }
        })
        .catch(() => {
          // error msg
          browser.notifications.create({
            type: 'basic',
            eventTime: Date.now() + 4000,
            iconUrl: browser.runtime.getURL(`static/icon-128.png`),
            title: 'Saladict',
            message: i18n.t('notification_youdao_err')
          })
        })
      break
    case 'view_as_pdf':
      const pdfURL = browser.runtime.getURL('static/pdf/web/viewer.html')
      if (linkUrl) {
        // open link as pdf
        openURL(pdfURL + '?file=' + linkUrl)
      } else {
        browser.tabs.query({ active: true, currentWindow: true })
          .then(tabs => {
            // if it is a pdf page
            if (tabs.length > 0 && /\.pdf$/i.test(tabs[0].url || '')) {
              openURL(pdfURL + '?file=' + tabs[0].url)
            } else {
              openURL(pdfURL)
            }
          })
      }
      break
    case 'search_history':
      openURL(browser.runtime.getURL('history.html'))
      break
    case 'notebook':
      openURL(browser.runtime.getURL('notebook.html'))
      break
    default:
      storage.sync.get('config')
        .then(result => {
          const config = result.config as AppConfig
          const url = config.contextMenus.all[menuItemId]
          if (url) {
            openURL(url.replace('%s', selectionText))
          }
        })
  }
})

export function init (initConfig: ContextMenusConfig): Observable<void> {
  if (setMenus$$) { return setMenus$$ }
  // when context menus config changes
  const contextMenusChanged$ = storage.createStream<AppConfig>('config').pipe(
    filter((config): config is StorageUpdate<AppConfig> => {
      const { newValue, oldValue } = config
      if (!newValue) { return false }
      if (!oldValue) { return true }

      return !isEqual(
        oldValue.contextMenus.selected,
        newValue.contextMenus.selected,
      )
    }),
    map(({ newValue }) => newValue.contextMenus),
    startWith(initConfig),
  )

  let signal$: Observable<boolean>

  setMenus$$ = combineLatest(
    contextMenusChanged$,
    i18n$$,
  ).pipe(
    // ignore values while setContextMenus is running
    // if source emits any value during setContextMenus,
    // retrieve the latest after setContextMenus is completed
    audit(() => signal$),
    mergeMap(([contextMenus, t]) => setContextMenus(contextMenus, t)),
    share(),
  )

  signal$ = setMenus$$.pipe(
    mapTo(true), // last setContextMenus is completed
    startWith(true),
  )

  setMenus$$.subscribe()

  return setMenus$$
}

function setContextMenus (
  contextMenus: ContextMenusConfig,
  t: TranslationFunction
): Promise<void> {
  return browser.contextMenus.removeAll()
    .then(() => {
      const optionList: CreateMenuOptions[] = []

      // pdf
      optionList.push({
        id: 'view_as_pdf',
        title: t('view_as_pdf'),
        contexts: ['link', 'browser_action']
      })

      let hasGooglePageTranslate = false
      let hasYoudaoPageTranslate = false
      contextMenus.selected.forEach(id => {
        let contexts: browser.contextMenus.ContextType[] = ['selection']
        if (id === 'google_page_translate') {
          hasGooglePageTranslate = true
          contexts = ['all']
        } else if (id === 'youdao_page_translate') {
          hasYoudaoPageTranslate = true
          contexts = ['all']
        }
        optionList.push({
          id,
          title: t(id),
          contexts
        })
      })

      // Only for browser action
      if (!hasGooglePageTranslate) {
        optionList.push({
          id: 'google_page_translate',
          title: t('google_page_translate'),
          contexts: ['browser_action']
        })
      }
      if (!hasYoudaoPageTranslate) {
        optionList.push({
          id: 'youdao_page_translate',
          title: t('youdao_page_translate'),
          contexts: ['browser_action']
        })
      }

      optionList.push({
        type: 'separator',
        id: Date.now().toString(),
        contexts: ['browser_action']
      })

      // search history
      optionList.push({
        id: 'search_history',
        title: t('history_title'),
        contexts: ['browser_action']
      })

      // Manual
      optionList.push({
        id: 'notebook',
        title: t('notebook_title'),
        contexts: ['browser_action']
      })

      return Promise.all(
        optionList.map(option =>
        new Promise(resolve => {
          browser.contextMenus.create(option, resolve)
        })
      ))
    })
    .then(() => { /* noop */ })
}

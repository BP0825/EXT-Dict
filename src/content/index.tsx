import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ProviderRedux } from 'react-redux'
import SaladBowlContainer from './containers/SaladBowlContainer'
import DictPanelContainer from './containers/DictPanelContainer'
import WordEditorContainer from './containers/WordEditorContainer'
import createStore from './redux/create'

import { I18nextProvider as ProviderI18next } from 'react-i18next'
import i18nLoader from '@/_helpers/i18n'
import dictsLocles from '@/_locales/dicts'
import contentLocles from '@/_locales/content'

import { message } from '@/_helpers/browser-api'
import { MsgType } from '@/typings/message'

import './content.scss'

message.send({ type: MsgType.RequestCSS })

const i18n = i18nLoader({ content: contentLocles, dict: dictsLocles }, 'content')

const store = createStore()

const App = () => (
  <ProviderRedux store={store}>
  <ProviderI18next i18n={i18n}>
    <div>
      <SaladBowlContainer />
      <DictPanelContainer />
      <WordEditorContainer />
    </div>
  </ProviderI18next>
  </ProviderRedux>
)

ReactDOM.render(<App />, document.createElement('div'))

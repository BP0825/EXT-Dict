import React, { useState } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

export const WaveformBox = () => {
  const [expand, setExpand] = useState(false)

  return (
    <div className="waveformBox">
      <button
        className="waveformBox-DrawerBtn"
        onClick={() => setExpand(!expand)}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 59.414 59.414"
          xmlns="http://www.w3.org/2000/svg"
          className={
            'waveformBox-DrawerBtn_Arrow' + (expand ? ' isExpand' : '')
          }
        >
          <path d="M 58 45.269 L 29.707 16.975 L 1.414 45.27 L 0 43.855 L 29.707 14.145 L 59.414 43.855" />
        </svg>
      </button>
      <div className={`waveformBox-FrameWrap${expand ? ' isExpand' : ''}`}>
        <CSSTransition
          timeout={400}
          in={expand}
          classNames="waveformBox-Frame"
          mountOnEnter
          unmountOnExit
        >
          {renderIframe}
        </CSSTransition>
      </div>
    </div>
  )
}

function renderIframe() {
  return (
    <iframe
      className="waveformBox-Frame"
      src={browser.runtime.getURL('/audio-control.html')}
      sandbox="allow-same-origin allow-scripts"
    />
  )
}

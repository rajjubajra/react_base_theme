import React from 'react'
import Iframe from 'react-iframe';

function IframeDesktop() {
  return (
    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
      width="450px"
      height="450px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative" />
  )
}

export default IframeDesktop

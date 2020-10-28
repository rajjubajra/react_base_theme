import React from 'react'
import MoreButton from './MoreButton'


const texStyle = {
  position: "absolute",
  top: "17%",
  padding: "0px 25px",
  fontWeight: "200",
  letterSpacing: "0.1rem"
}

function Text() {
  return (
    <div style={texStyle}>
      <h3>Lorem Ipsum Text</h3>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.
    </p>
      <MoreButton text="More" />
    </div>
  )
}

export default Text

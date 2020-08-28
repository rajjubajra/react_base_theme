import React from 'react'


function CustomPlaceholder(props) {
  const divStyle = {
    display: "flex",
    width: props.width,
    height: props.height,
    justifyContent: "center",
    alignItems: "center"
  }
  const pStyle = {
    fontSize: "0.6rem",
    fontWeight: "200"
  }

  return (
    <div style={divStyle}>
      {props.width} x {props.height}
      <p style={pStyle}>Yellow-website Image Placeholder</p>
    </div>
  )
}

export default CustomPlaceholder

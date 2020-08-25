import React from 'react'


const border = "3px solid #888";

const stylediv = {
  display: "flex",
  position: "absolute",
  bottom: "50%",
  width: "100%",
  margin: "0px auto",
  zIndex: "10"
}

const prev = {
  width: "15px",
  height: "15px",
  borderTop: border,
  borderRight: border,
  position: "absolute",
  left: "15px",
  transform: "rotate(-135deg)",
  cursor: "pointer"
}

const next = {
  width: "15px",
  height: "15px",
  borderTop: border,
  borderRight: border,
  position: "absolute",
  right: "15px",
  transform: "rotate(45deg)",
  cursor: "pointer"
}


function LeftRightButton(props) {
  return (
    <div style={stylediv}>
      <i style={prev} onClick={props.PrevSlide}></i>
      <i style={next} onClick={props.NextSlide}></i>
    </div>
  )
}

export default LeftRightButton

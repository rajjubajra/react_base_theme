import React from 'react'

const backgroudline = "#ccc";

const btnStyle = {
  position: "relative",
  width: "150px",
  height: "40px",
  display: "flex",
  padding: "6px 10px",
  border: "0px solid #ccc",
  cursor: "pointer"
}

const lineStyle = {
  width: "47px",
  height: "1px",
  backgroundColor: backgroudline,
  position: "absolute",
  left: "60px",
  top: "19px"
}

const squareStyle = {
  width: "10px",
  height: "10px",
  backgroundColor: backgroudline,
  position: "absolute",
  left: "81px",
  transform: "rotate(45deg)",
  top: "0.91rem"
}

function MoreButton(props) {
  return (
    <div style={btnStyle}>
      <span>{props.text}</span>
      <span style={lineStyle}></span>
      <span style={squareStyle}></span>
    </div>
  )
}

export default MoreButton

import React from 'react'

const blockStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
}

const boxWrapperStyle = {
  width: "500px",
  height: "auto",
  display: "flex",
  flexWrap: "wrap"
}

const boxStyle = {
  minWidth: "240px",
  height: "240px",
  border: "1px solid #eee",
  margin: "2px"
}




function LeftContent() {
  return (
    <div style={blockStyle}>
      <div style={boxWrapperStyle}>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
        <div style={boxStyle}>3</div>
        <div style={boxStyle}>4</div>
      </div>
    </div>
  )
}
export default LeftContent
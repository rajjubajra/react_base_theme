import React from 'react'

function HalfImageBlock(props) {


  const firstHalfStyle = {
    width: "100%",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#eee",
    padding: "0px 100px"
  }


  return (
    <div className="w-100">
      <div style={firstHalfStyle}>
        <h1>About us</h1>
      </div>
    </div>
  )
}

export default HalfImageBlock

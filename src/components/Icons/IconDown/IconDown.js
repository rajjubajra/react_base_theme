import React, { useState } from 'react';
import './IconDown.scss';


function IconUp() {

  const [arrow, setArrow] = useState(false);

  const IconCloseStyle = {
    padding: "20px",
    margin: "0px",
    outline: "1px solid #000",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transform: "rotate(-90deg)"
  }

  const crossleft = {
    width: arrow ? "10px" : "20px",
    height: "1px",
    backgroundColor: "#000",
    transform: "skew(0deg, 30deg) translate(0px, 5px)",
    transition: "transform 1s"
  }

  const crossRight = {
    width: arrow ? "10px" : "20px",
    height: "1px",
    backgroundColor: "#000",
    transform: "skew(0deg, -30deg) translate(0px, -8px)",
    transition: "transform 1s"
  }






  return (
    <div style={IconCloseStyle}>
      <div className="up-arrow">
        <div style={crossleft}></div>
        <div style={crossRight}></div>
      </div>

    </div>
  )
}

export default IconUp

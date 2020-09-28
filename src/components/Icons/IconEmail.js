import React, { useState } from 'react';

const background_color = '#000';
const lineHeight = "3px";

function IconEmail() {

  const [open, setOpen] = useState(false);

  const iconsStyle = {
    padding: "20px",
    margin: "0px",
    outline: "1px solid #000",
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  }

  const lineTop = {
    width: "62px",
    height: lineHeight,
    transform: 'translate(0px, -2px)',
    backgroundColor: open ? "#eaeaea" : background_color,
    transition: "background 1.5s"
  }

  const lineLeft = {
    width: "30px",
    height: lineHeight,
    transform: 'rotate(90deg) translate(10px, 14px)',
    backgroundColor: background_color
  }

  const lineRight = {
    width: "30px",
    height: lineHeight,
    transform: 'rotate(90deg) translate(7px, -46px)',
    backgroundColor: background_color
  }

  const lineBottom = {
    width: "60px",
    height: lineHeight,
    transform: 'translate(0px, 18px)',
    backgroundColor: background_color
  }

  const openerLeft = {
    width: "30px",
    height: lineHeight,
    backgroundColor: background_color,
    transform: open
      ? "skew(0deg, -27deg) translate(0px, -21px)"
      : "skew(0deg, 27deg) translate(1px, -5px)",
    transition: "transform 1s"
  }

  const openerRight = {
    width: open ? "32" : "30px",
    height: lineHeight,
    backgroundColor: background_color,
    transform: open
      ? "skew(0deg, 27deg) translate(30px, -39px)"
      : "skew(0deg, -27deg) translate(30px, 8px)",
    transition: "transform 1s"
  }


  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={iconsStyle}>

      <div>
        <div style={lineTop}></div>
        <div style={lineLeft}></div>
        <div style={lineRight}></div>
        <div style={lineBottom}></div>
        <div style={openerLeft}></div>
        <div style={openerRight}></div>
      </div>

    </div>
  )
}

export default IconEmail

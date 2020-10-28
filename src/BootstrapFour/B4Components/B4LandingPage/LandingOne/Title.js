import React from 'react';

const titleStyle = {
  transform: "rotate(-90deg)",
  position: "absolute",
  bottom: "30%",
  right: "0px",
  letterSpacing: "2rem",
  textTransform: "uppercase",
}
const titleStyleSM = {
  textAlign: "right",
  letterSpacing: "1rem"
}
const titleStyleXS = {
  textAlign: "right",
  letterSpacing: "1rem"
}

const hOneStyle = {
  letterSpacing: "0.60rem"
}

function Title() {
  return (
    <>
      {/** DESKTOP */}
      <div className="d-none d-sm-none d-md-block">
        <div style={titleStyle}>
          <h1 style={hOneStyle}>YW4</h1>
          <h1 style={hOneStyle}>Music</h1>
          <h4 style={hOneStyle}>THREE</h4>
        </div>

      </div>
      {/** TABLET 
      <div className="col-lg-4 col-md-6 d-none d-sm-block d-md-none">
        <h1 style={titleStyleSM}>YW4 MUSIC ONE</h1>
      </div>
      {/** TABLET AND MOBILE 
      <div className="col-lg-4 col-md-6 d-block d-sm-none">
        <h1 style={titleStyleXS}>YW4 MUSIC ONE</h1>
      </div>
      */}
    </>
  )
}

export default Title

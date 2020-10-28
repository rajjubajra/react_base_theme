import React from 'react';

const titleStyle = {
  transform: "rotate(-90deg)",
  position: "absolute",
  bottom: "5%",
  right: "0px",
  letterSpacing: "2rem",
  textTransform: "uppercase",
}
const titleStyleMD = {
  transform: "rotate(-90deg)",
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
      <div className="col-lg-2 d-none d-md-none d-lg-block">
        <div style={titleStyle}>
          <h1 style={hOneStyle}>YW4</h1>
          <h1 style={hOneStyle}>Music</h1>
          <h4 style={hOneStyle}>THREE</h4>
        </div>
      </div>
      {/** TABLET */}
      <div className="col-md-3 mt-5 d-md-block d-none d-sm-none d-lg-none order-last">
        <div style={titleStyleMD}>
          <div>
            <h1 style={hOneStyle}>YW4</h1>
            <h1 style={hOneStyle}>Music</h1>
            <h4 style={hOneStyle}>THREE</h4>
          </div>
        </div>
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

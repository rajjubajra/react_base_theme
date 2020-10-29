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
  letterSpacing: "1rem",
  position: "relative",
  left: "17%",
}
const titleStyleSM = {
  transform: "rotate(-90deg)",
  width: "200px",
  letterSpacing: "1rem",
  margin: "42px 0px 0px -30px"
}
const titleStyleXSM = {
  transform: "rotate(-90deg)",
  transformOrigin: "left",
  width: "200px",
  letterSpacing: "1rem",
  position: "relative",
  top: "30px",
  left: "30px"
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
      <div className="col-md-3 mt-5 d-md-block d-none d-lg-none">
        <div style={titleStyleMD}>
          <div>
            <h1 style={hOneStyle}>YW4</h1>
            <h1 style={hOneStyle}>Music</h1>
            <h4 style={hOneStyle}>THREE</h4>
          </div>
        </div>
      </div>
      {/** MOBILE and TABLET */}
      <div className="col-sm-3  d-none d-sm-block d-md-none">
        <div style={titleStyleSM}>
          <div>
            <h1 style={hOneStyle}>YW4</h1>
            <h1 style={hOneStyle}>Music</h1>
            <h5 style={hOneStyle}>THREE</h5>
          </div>
        </div>
      </div>
      {/** XS ONLY */}
      <div className="w-100  d-block d-sm-none">
        <div className="w-100 d-flex justify-content-end">
          <div style={titleStyleXSM}>
            <div>
              <h1 style={hOneStyle}>YW4</h1>
              <h1 style={hOneStyle}>Music</h1>
              <p style={hOneStyle}>THREE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Title

import React from 'react'
import MoreButton from './MoreButton'


const texStyle = {
  position: "absolute",
  top: "0%",
  padding: "0px 25px",
  fontWeight: "200",
  letterSpacing: "0.1rem"
}
const texStyleMD = {
  width: "88%",
  position: "absolute",
  top: "17%",
  padding: "0px 25px",
  fontWeight: "200",
  letterSpacing: "0.1rem"
}

const texStyleSM = {
  width: "88%",
  position: "absolute",
  top: "17%",
  padding: "0px 25px",
  fontWeight: "200",
  letterSpacing: "0.1rem",
  minHeight: "200px"
}

const texStyleXSM = {
  width: "88%",
  marginTop: "20px",
  padding: "0px 25px",
  fontWeight: "200",
  letterSpacing: "0.1rem",
  minHeight: "200px"
}


function Text() {
  return (
    <>
      {/** DESKTOP */}
      <div className="col-lg-3 d-none d-lg-block">
        <div style={texStyle}>
          <h3>Lorem Ipsum Text</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
          <span className="d-flex justify-content-end">
            <MoreButton text="More" />
          </span>
        </div>
      </div>

      {/** TABLET */}
      <div className="col-md-9  mt-5 d-none d-md-block d-lg-none">
        <div style={texStyleMD}>
          <h3>Lorem Ipsum Text</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
          <span className="d-flex justify-content-end">
            <MoreButton text="More" />
          </span>
        </div>
      </div>


      {/** MOBILE and TABLET */}
      <div className="col-sm-9  mt-5 d-none d-sm-block d-md-none">
        <div style={texStyleSM}>
          <h3>Lorem Ipsum Text</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
          <span className="d-flex justify-content-end mb-5">
            <MoreButton text="More" />
          </span>
        </div>
      </div>


      {/** XS ONLY */}
      <div className="col-sm-9 d-block d-sm-none order-last">
        <div style={texStyleXSM}>
          <h3>Lorem Ipsum Text</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
          <span className="d-flex justify-content-end mb-5">
            <MoreButton text="More" />
          </span>
        </div>
      </div>
    </>
  )
}

export default Text

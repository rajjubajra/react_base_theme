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
  position: "absolute",
  top: "17%",
  padding: "0px 25px",
  fontWeight: "200",
  letterSpacing: "0.1rem"
}


function Text() {
  return (
    <>
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

      <div className="col-md-8 d-none d-md-block d-lg-none order-last mt-5">
        <div style={texStyleMD}>
          <h3>Lorem Ipsum Text</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
          <span className="d-flex justify-content-end">
            <MoreButton text="More" />
          </span>
        </div>
      </div>
    </>
  )
}

export default Text

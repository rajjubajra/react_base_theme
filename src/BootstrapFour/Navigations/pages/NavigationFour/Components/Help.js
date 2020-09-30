import React from 'react'
import IconClose from './IconClose'

function Help(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-end hide-in-mobile">
          <div onClick={() => props.hideView('base:help')}><IconClose /></div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-mb-4 col-sm-12">
          <h5 className="mb-3">Contact</h5>
          <div className="mb-5">
            <p>Email:</p>
            <p>+00 (0) 000 000 0000</p>
            <p className="small-font">Amet consectetur adipisicing elit. Sed, et ipsam iste expedita ea cumque culpa voluptatibus </p>
          </div>
        </div>
        <div className="col-lg-4 colo-md-14 col-sm-6">
          <h5 className="mb-3">Information:</h5>
          <div style={{ lineHeight: "0.4rem" }}>
            <p>Postage and delivery</p>
            <p>Sales Return</p>
            <p>Order Tracking</p>
          </div>

        </div>
        <div className="col-lg-4 colo-md-4 col-sm-6">
          <h5 className="mb-3">FAQ</h5>
          <div style={{ lineHeight: "0.4rem" }}>
            <p>Delivery Time</p>
            <p>How do I return</p>
            <p>Delivery Price</p>
            <p>International postage</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help

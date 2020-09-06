import React from 'react'
import PhotoMusic from '../../components/PhotoPlaceholder/PhotoMusic';


/** D8WebForm */
function FormOne() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-9"><h5>Contact Form</h5></div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 mt-5">
          <PhotoMusic width="200px" height="400px" />
        </div>
        <div className="col-lg-8">
          <iframe src="//yellow-website.com/d8-react-base-theme-backend/webform/contact_form/share/iframe-resizer/4.2.10" title="Contact form | D8 React Base Theme Backend" className="webform-share-iframe" allow="geolocation; microphone; camera" allowtransparency="true" style={{ width: "1px", minWidth: "100%", height: "550px", border: "0px solid #ccc", padding: "50px" }}>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default FormOne
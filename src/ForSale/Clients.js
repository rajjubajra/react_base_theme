import React from 'react';
import './ForSale.scss';
import Cards from './Cards';





const Clients = () => {

  return (
    <div className='container mt-5 mb-5 min-vh-100'>
      {/** PAGE TITLE AND LOGO */}
      <div className="row">
        <div className="col-6">
          <div
            style={{
              position: "relative",
              top: "12px",
              letterSpacing: "4px",
            }}>
            <h1 style={{ fontWeight: "100" }}>Clients:</h1>
          </div>
        </div>
        {/** PAGE LOGO */}
        <div className="col-6 d-flex justify-content-end">
          <div style={{ maxWidth: "200px" }}>
            <img style={{ width: "100%", height: "auto" }}
              src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/yellow-website-logo-horizontal.png"
              alt="Yellow website logo" />
          </div>
        </div>
      </div>


      {/** CARD LISTING */}
      <div className='row'>

        <Cards
          title="PlustIt Recruitment"
          linkref="http://www.pulseitrecruitment.co.uk/"
          text="Recruitment Agency"
          type="Business"
          bgImage="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/pulseIt.png"
        />

        <Cards
          title="Everest Spice Plymouth"
          linkref="http://www.everestspiceplymouth.uk/"
          text="Restaurant"
          type="Food"
          bgImage="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/everest-spice.png"
        />

      </div>
    </div>
  )
}

export default Clients

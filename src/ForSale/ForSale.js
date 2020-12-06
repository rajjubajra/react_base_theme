import React from 'react';
import './ForSale.scss';
import Cards from './Cards';


const ForSale = () => {

  return (
    <div className='container mt-5 mb-5 min-vh-100'>
      <div className="row">
        <div className="col-6">
          <div
            style={{
              position: "relative",
              top: "12px",
              letterSpacing: "4px",
            }}>
            <h1 style={{ fontWeight: "100" }}>Websites Themes:</h1>
          </div>

        </div>
        <div className="col-6 d-flex justify-content-end">
          <div style={{ maxWidth: "200px" }}>
            <img style={{ width: "100%", height: "auto" }}
              src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/yellow-website-logo-horizontal.png"
              alt="Yellow website logo" />
          </div>
        </div>

      </div>

      <div className='row'>

        <Cards
          title="Music One"
          linkref="/b4MusicOne-home"
          text="Music"
          type="Band / Solo Artist"

          bgImage="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail2_0_0.png"
        />

        <Cards
          title="Music Two"
          linkref="/b4Music-two-home"
          text="Music"
          type="Band / Solo Artist"
          bgImage="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail3_0.png"
        />

        <Cards
          title="Music Three"
          linkref="/b4Music-three-home"
          text="Music"
          type="Band / Solo Artist"
          bgImage="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail4_0.png"
        />

        <Cards
          title="Blog One"
          linkref="/b4Blog-one-"
          text="Blog"
          type="Blog"
          bgImage="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail5.png"
        />

        <Cards
          title="Blog Two"
          linkref="/b4Blog-two-"
          text="Blog"
          type="Blog"
          bgImage="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail6.png"
        />

        <Cards
          title="Blog Three"
          linkref="/b4Blog-three-"
          text="Blog"
          type="Blog"
          bgImage="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail7.png"
        />

        <Cards
          title="Business One"
          linkref="/b4-business-one-home"
          text="Local Business / Professional service"
          type="Business"
          bgImage="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Business1.png"
        />


        <Cards
          title="Business Two"
          linkref="/b4-business-two"
          text="Local Business / Professional service"
          type="Business"
          bgImage="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Business2.png"
        />


      </div>
    </div>
  )
}

export default ForSale

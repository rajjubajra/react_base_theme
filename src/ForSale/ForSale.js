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
          <img style={
            {
              width: "100%",
              maxWidth: "200px"
            }
          } src="http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/yellow-website-logo-horizontal.png"
            alt="Yellow website logo" />
        </div>

      </div>

      <div className='row'>

        <Cards
          title="Music One"
          linkref="/b4MusicOne-home"
          text="Music"
          type="Band / Solo Artist"

          bgImage="http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail2_0.png"
        />

        <Cards
          title="Music Two"
          linkref="/b4Music-two-home"
          text="Music"
          type="Band / Solo Artist"
          bgImage="http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail3_0.png"
        />

        <Cards
          title="Music Three"
          linkref="/b4Music-three-home"
          text="Music"
          type="Band / Solo Artist"
          bgImage="http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail4_0.png"
        />

        <Cards
          title="Blog One"
          linkref="/b4Blog-one-"
          text="Blog"
          type="Blog"
          bgImage="http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail5.png"
        />

        <Cards
          title="Blog Two"
          linkref="/b4Blog-two-"
          text="Blog"
          type="Blog"
          bgImage="http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail6.png"
        />




      </div>
    </div>
  )
}

export default ForSale

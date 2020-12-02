import React from 'react'
import { Link } from 'react-router-dom';

const linkStyle = {
  display: "flex",
}


function SocialMedia() {
  return (
    <div className="container social-media">
      <div className='row'>
        <div className="col-lg-9 col-md-8 col-sm-6"></div>
        <div className="col-lg-3 col-md-4 col-sm-6" style={linkStyle}>
          <Link to="#">
            <img className="img-fluid"
              src={`${require('../../../../images/social-media/drw-facebook.png')}`}
              alt="icon"
            />
          </Link>
          <Link to="#">
            <img className="img-fluid"
              src={`${require('../../../../images/social-media/drw-twitter.png')}`}
              alt="icon"
            />
          </Link>
          <Link to="#">
            <img className="img-fluid"
              src={`${require('../../../../images/social-media/drw-youtube.png')}`}
              alt="icon"
            />
          </Link>
          <Link to="#">
            <img className="img-fluid"
              src={`${require('../../../../images/social-media/drw-instagram.png')}`}
              alt="icon"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia

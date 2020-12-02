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
              src=""
              alt="icon"
            />
          </Link>
          <Link to="#">
            <img className="img-fluid"
              src=""
              alt="icon"
            />
          </Link>
          <Link to="#">
            <img className="img-fluid"
              src=""
              alt="icon"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia

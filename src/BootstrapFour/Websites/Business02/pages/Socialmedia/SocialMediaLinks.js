import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function SocialMediaLinks() {

  const styleIcon = {
    margin: "10px",
  }

  return (
    <div className="col d-flex flex-wrap justify-content-center">
      <span className="badge">
        <Link style={styleIcon} to="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></Link>
      </span>
      <span className="badge">
        <Link style={styleIcon} to="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
      </span>
      <span className="badge">
        <Link style={styleIcon} to="#"><FontAwesomeIcon icon={['fab', 'youtube']} /></Link>
      </span>
      <span className="badge">
        <Link style={styleIcon} to="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link>
      </span>
      <span className="badge">
        <Link style={styleIcon} to="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></Link>
      </span>
    </div>
  )
}

export default SocialMediaLinks
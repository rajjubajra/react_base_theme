import React from 'react'

const imgStyle = {
  maxWidth: "50px",
  filter: "grayscale(50%)",
}

export default function SocialMedia() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      width: "100%"
    }}>
      <img style={imgStyle} src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/drw-facebook.png" alt="facebook" />
      <img style={imgStyle} src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/drw-twitter.png" alt="Twitter" />
      <img style={imgStyle} src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/drw-instagram.png" alt="Instagam" />
      <img style={imgStyle} src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/drw-youtube.png" alt="youtube" />
    </div>
  )
}

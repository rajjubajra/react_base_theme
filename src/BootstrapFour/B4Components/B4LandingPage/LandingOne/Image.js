import React from 'react'

function Image() {

  const imageUrl = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_1.JPG';
  const imageAlt = 'Main';

  const imageStyle = {
    width: "100%",
    marginTop: "25%",
  }

  return (
    <img style={imageStyle} src={imageUrl} alt={imageAlt} />
  )
}
export default Image
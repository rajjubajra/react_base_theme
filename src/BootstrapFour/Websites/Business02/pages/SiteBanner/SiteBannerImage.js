import React from 'react';


function SiteBannerImage() {

  const imgPosition = {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const image = "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/DSC_2378.jpeg"
  return (
    <div style={imgPosition} >
      <img
        style={{
          maxWidth: "350px",
          margin: "0px auto",
          animation: "fadeIn 4s",
          animationFillMode: "both"
        }} src={image} alt="dev" />
    </div>

  )
}

export default SiteBannerImage

import React from 'react';
import "./WideImage.scss";


function WideImage() {
  const image = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/computer-4484282_1280.jpg';



  return (
    <div className="wide-image">
      <img style={{
        width: "100%",
        height: "500px",
        objectFit: "cover"
      }} src={image} alt="wide" />
    </div>
  )
}

export default WideImage

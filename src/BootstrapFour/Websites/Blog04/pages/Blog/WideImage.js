import React from 'react'

function WideImage() {
  const image = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/computer-4484282_1280.jpg';



  return (
    <div>
      <img style={{
        width: "250px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "20px 100px",
        boxShadow: "2px 2px 2px 1px #a5a0a0b8"
      }} src={image} alt="wide" />
    </div>
  )
}

export default WideImage

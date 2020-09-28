import React from 'react'
import PhotoTravel from '../../components/PhotoPlaceholder/PhotoTravel';


const photo = {
  display: "block",
  maxWidth: "500px",
  minHeight: "600px",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
}

function Photo() {
  return (
    <div style={photo}>
      <PhotoTravel
        className="d-block w-100"
        width="100%"
        height="600px"
      />
    </div>
  )
}

export default Photo

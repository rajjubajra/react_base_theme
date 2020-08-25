import React from 'react'
import { PhotoPlaceholder } from 'react-placeholder-image';


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
      <PhotoPlaceholder
        className="d-block w-100"
        width={500}
        height={600}
      />
    </div>
  )
}

export default Photo

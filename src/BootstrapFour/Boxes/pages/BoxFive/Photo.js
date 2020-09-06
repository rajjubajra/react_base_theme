import React from 'react'
import PhotoFood from './PhotoPlaceholder/PhotoFood';


const photo = {
  maxWidth: "800px",
  Width: "100%",
  Height: "auto",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
}
const styleSection = {
  width: "100%",
  display: "flex",
  justifyContent: "center"
}

function Photo() {
  return (
    <section style={styleSection}>
      <div style={photo}>
        <PhotoFood
          className="d-block w-100"
          width="600px"
          height="400px"
        />
      </div>
    </section>

  )
}

export default Photo

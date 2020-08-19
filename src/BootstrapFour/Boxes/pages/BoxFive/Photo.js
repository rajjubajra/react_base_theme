import React from 'react'
import { PhotoPlaceholder } from 'react-placeholder-image';


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
        <PhotoPlaceholder
          className="d-block w-100"
          width={600}
          height={400}
        />
      </div>
    </section>

  )
}

export default Photo

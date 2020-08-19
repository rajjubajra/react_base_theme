import React from 'react'
import { PhotoPlaceholder } from 'react-placeholder-image';


const boxOne = {
  display: "block",
  maxWidth: "500px",
  height: "400px",
  margin: "27px",
  border: "1px solid #eee",
  position: "relative",
}
const caption = {
  color: "#000",
  background: "rgb(248, 249, 250, 0.21)",
  width: "100%",
  fontWeight: "100",
  letterSpacing: "0.1rem",
  marginTop: "5px",
}

function PhotoBox() {
  return (
    <div style={boxOne}>
      <PhotoPlaceholder
        className="d-block w-100"
        width={500}
        height={400}
      />
      <p style={caption}>Text Image</p>
    </div>
  )
}

export default PhotoBox

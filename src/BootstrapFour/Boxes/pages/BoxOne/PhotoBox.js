import React from 'react'
import { PhotoPlaceholder } from 'react-placeholder-image';


const boxTwo = {
  display: "flex",
  justifyContent: "center",
  margin: "10px",
  padding: "10px",
  minWidth: "230px",
  height: "295px",
  border: "1px solid #eee",
  position: "relative",
}
const caption = {
  position: "absolute",
  top: "55%",
  color: "#fff",
  background: "rgb(248, 249, 250, 0.21)",
  width: "100%",
  textAlign: "center"
}

function PhotoBox() {
  return (
    <div style={boxTwo}>
      <PhotoPlaceholder
        className="d-block w-100"
        width={230}
        height={300}
      />
      <h2 style={caption}>Text Image</h2>
    </div>
  )
}

export default PhotoBox

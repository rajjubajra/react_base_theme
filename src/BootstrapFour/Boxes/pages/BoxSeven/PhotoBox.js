import React from 'react'
import PhotoFood from '../../components/PhotoPlaceholder/PhotoFood';


const boxTwo = {
  display: "flex",
  justifyContent: "center",
  margin: "10px",
  padding: "10px",
  minWidth: "300px",
  height: "300px",
  border: "1px solid #eee",
  position: "relative",
}
const caption = {
  position: "absolute",
  top: "55%",
  color: "#fff",
  background: "rgb(248, 249, 250, 0.21)",
  width: "100%",
  textAlign: "center",
  fontWeight: "800"
}

function PhotoBox() {
  return (
    <div style={boxTwo}>
      <PhotoFood
        className="d-block w-100"
        width="300px"
        height="280px"
      />
      <h2 style={caption}>Text Image</h2>
    </div>
  )
}

export default PhotoBox

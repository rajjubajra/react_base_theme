import React from 'react'
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';


const boxOne = {
  display: "block",
  maxWidth: "500px",
  height: "auto",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
}
const caption = {
  color: "#000",
  width: "100%",
  fontWeight: "100",
  letterSpacing: "0.1rem",
  marginTop: "5px",
}

function PhotoBox(props) {
  return (

    <div style={boxOne}>
      <PhotoMusic
        width={props.width}
        height={props.height}
      />
      <p style={caption}>Text Image</p>
    </div>
  )
}

export default PhotoBox

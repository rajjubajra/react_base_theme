import React from 'react';
import PhotoTravel from '../../components/PhotoPlaceholder/PhotoTravel';


const boxOne = {
  display: "block",
  maxWidth: "500px",
  maxHeight: "400px",
  margin: "27px",
  border: "0px solid #eee",
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

function PhotoBox(props) {
  return (

    <div style={boxOne}>
      <PhotoTravel
        className="d-block w-100"
        width={props.width}
        height={props.height}
      />
      <p style={caption}>Text Image</p>
    </div>
  )
}

export default PhotoBox

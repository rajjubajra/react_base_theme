import React from 'react';


function PhotoPlaceholder(props) {


  const imgStyle = {
    width: props.width,
    height: props.height,
    objectFit: "cover"
  }

  return (
    <div>
      <img style={imgStyle} src={props.imgSrc} alt={props.imgAlt} />
      <p style={{ textAlign: "center" }}>Image Index: {props.imgIndex}</p>
    </div>
  )
}

export default PhotoPlaceholder

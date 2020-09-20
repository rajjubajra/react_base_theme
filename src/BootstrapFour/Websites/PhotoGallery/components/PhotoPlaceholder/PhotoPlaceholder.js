import React from 'react';


function PhotoPlaceholder(props) {


  const imgStyle = {
    width: props.width,
    height: props.height,
    objectFit: "cover"
  }

  return (
    <>
      <img style={imgStyle} src={props.imgSrc} alt={props.imgAlt} />
      <p className="small-font" style={{ textAlign: "center" }}>Image Index: {props.imgIndex}</p>
      <p className="extra-small-font">{props.imgSrc}</p>
    </>
  )
}

export default PhotoPlaceholder

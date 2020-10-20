import React from 'react';
import CopyImageUriToClipBoard from './CopyImageUriToClipBoard';


function PhotoPlaceholder(props) {


  const imgStyle = {
    width: props.width,
    height: props.height,
    objectFit: "cover"
  }

  return (
    <>
      <img style={imgStyle} src={props.imgSrc} alt={props.imgAlt} />
      <span className="small-font" style={{ textAlign: "center" }}>
        Image Index: {props.imgIndex}</span>
      <CopyImageUriToClipBoard image_uri={props.imgSrc} />
    </>
  )
}

export default PhotoPlaceholder

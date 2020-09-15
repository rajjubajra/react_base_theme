import React from 'react';


function PhotoPlaceholder(props) {


  const imgStyle = {
    width: props.width,
    height: props.height,
    objectFit: "cover"
  }

  return (
    <div>
      <img style={imgStyle} src={props.imgSrc} alt="Travel" />
    </div>
  )
}

export default PhotoPlaceholder

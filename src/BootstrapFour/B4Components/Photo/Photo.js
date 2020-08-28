import React from 'react';
import { PhotoPlaceholder } from 'react-placeholder-image';

function Photo(props) {
  return (
    <PhotoPlaceholder
      className="d-block w-100"
      width={props.width}
      height={props.height}
    />
  )
}

export default Photo

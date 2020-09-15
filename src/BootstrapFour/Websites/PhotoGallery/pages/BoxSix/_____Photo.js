import React from 'react';
import PhotoPlaceholder from '../../components/PhotoPlaceholder/PhotoPlaceholder';

function Photo(props) {
  return (
    <PhotoPlaceholder
      className="d-block w-100"
      width="100%"
      height="400px"
      imgSrc={props.imgSrc}
    />
  )
}

export default Photo

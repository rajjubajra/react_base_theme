import React from 'react';
import { PhotoPlaceholder } from 'react-placeholder-image';

function Photo() {
  return (
    <PhotoPlaceholder
      className="d-block w-100"
      width={500}
      height={400}
    />
  )
}

export default Photo

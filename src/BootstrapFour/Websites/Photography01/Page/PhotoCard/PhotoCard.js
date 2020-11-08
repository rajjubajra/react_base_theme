import React from 'react'
import { Link } from 'react-router-dom';

function PhotoCard(props) {

  const { id, image, alt, title, linkref } = props;

  return (
    <div>
      <Link>
        <img src={image} alt={alt} />
        <h3>Title</h3>
      </Link>

    </div>
  )
}

export default PhotoCard

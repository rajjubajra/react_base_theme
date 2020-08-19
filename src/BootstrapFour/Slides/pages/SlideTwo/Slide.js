import React from 'react'
import { PhotoPlaceholder } from 'react-placeholder-image';

function Slide(props) {
  return (
    <div className={`${props.index === props.activeSlide ? 'Active' : 'd-none'}`}>
      {/** PLACEHOLDER FOR IMAGE */}
      {/** * SOURCE: https://www.npmjs.com/package/react-placeholder-image */}
      <PhotoPlaceholder
        className="d-block w-100"
        width={800}
        height={400}
        backgroundColor="#123456"
      />


      {/** SLIDE CAPTIONS */}
      <div className="caption">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Slide

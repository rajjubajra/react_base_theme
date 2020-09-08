import React from 'react'
import PhotoTravel from '../../../../components/PhotoPlaceholder/PhotoTravel';


function Slide(props) {
  return (
    <div className={`${props.index === props.activeSlide ? 'Active' : 'd-none'}`}>
      {/** PLACEHOLDER FOR IMAGE */}
      {/** SOURCE: https://www.npmjs.com/package/react-placeholder-image */}
      <PhotoTravel
        className="d-block w-100"
        width="100%"
        height="100vh"
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

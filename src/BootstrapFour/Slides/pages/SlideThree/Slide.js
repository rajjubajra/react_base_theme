import React from 'react'
import PhotoFood from '../../components/PhotoPlaceholder/PhotoFood';

function Slide(props) {

  /** index id of previouse slide */
  const prevSlide = props.activeSlide === 0
    ? (props.dataLength - 1)
    : (props.activeSlide - 1);

  /** index id of Next slide */
  const nextSlide = props.activeSlide === (props.dataLength - 1)
    ? 0
    : (props.activeSlide + 1)

  return (
    <div className={`
    ${props.index === props.activeSlide ? 'Active' : ''}
    ${props.index === prevSlide ? 'prev-slide' : ''}
    ${props.index === nextSlide ? 'next-slide' : ''}
    `}>

      {/** PLACEHOLDER FOR IMAGE */}
      {/** * SOURCE: https://www.npmjs.com/package/react-placeholder-image */}
      <PhotoFood
        className="d-block w-100"
        width="100%"
        height="100vh"
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

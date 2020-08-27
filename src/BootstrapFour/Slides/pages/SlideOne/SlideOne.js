import React from 'react';
import './SlideOne.scss';
import Nav from '../../components/header/Nav';
import Slides from './Slides';



export const SlideOne = () => {
  return (
    <div className='slide-one'>
      <div style={{ position: "relative", zIndex: "50" }}><Nav /></div>
      <div className="slide">
        <Slides />
      </div>
    </div>
  )
}
export default SlideOne;
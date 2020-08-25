import React from 'react';
import './SlideTwo.scss';
import Nav from '../../components/header/Nav';
import Slides from './Slides';




export const SlideTwo = () => {
  return (
    <div className='slide-two'>
      <Nav />
      <div className="slide">
        <Slides />
      </div>
    </div>
  )
}
export default SlideTwo;
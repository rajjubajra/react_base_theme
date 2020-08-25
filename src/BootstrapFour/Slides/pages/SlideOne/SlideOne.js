import React from 'react';
import './SlideOne.scss';
import Nav from '../../components/header/Nav';
import Slides from './Slides';



export const SlideOne = () => {
  return (
    <div className='slide-one'>
      <Nav />
      <div className="slide">
        <Slides />
      </div>
    </div>
  )
}
export default SlideOne;
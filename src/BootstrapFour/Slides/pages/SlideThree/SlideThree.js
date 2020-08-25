import React from 'react';
import './SlideThree.scss';
import Nav from '../../components/header/Nav';
import Slides from './Slides';



export const SlideThree = () => {
  return (
    <div className='slide-three'>
      <Nav />
      <div className="slide">
        <Slides />
      </div>
    </div>
  )
}
export default SlideThree;
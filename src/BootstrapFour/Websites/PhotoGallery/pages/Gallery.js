import React from 'react'
import BoxSix from './BoxSix/BoxSix'
import ColourMode from '../components/ColourMode/ColourMode';
import Nav from '../components/header/Nav';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Gallery() {


  const className = useSelector(state => state.reducerSelectColourMode.colourMode);


  let { id } = useParams();
  console.log("params", { id });



  return (
    <div className={className}>
      <ColourMode />
      <Nav />
      <BoxSix id={id} />
    </div>
  )
}
export default Gallery
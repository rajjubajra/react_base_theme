import React from 'react';
import Nav from '../components/header/Nav';

import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import Cards from './Cards/Cards';



export default function Home() {



  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);




  return (
    <div className={`${className} photo-gallery`}>
      <ColourMode />
      <Nav />
      <Cards />
    </div>
  )
}

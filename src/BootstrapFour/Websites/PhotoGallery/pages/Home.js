import React from 'react';
import Nav from '../components/header/Nav';

import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import Cards from './Cards/Cards';
import PhotoPlaceholder from '../components/PhotoPlaceholder/PhotoPlaceholder';


export default function Home() {



  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);




  return (
    <div className={className}>
      <ColourMode />
      <Nav />
      <Cards />
    </div>
  )
}

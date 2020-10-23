import React from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import NavigationBar from '../components/header/NavigationBar';
import MusicCards from './musicCards/MusicCards';

import Text from './text/Text'

export default function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <div className={`music-zero ${className}`}>
      <ColourMode />
      <NavigationBar />

      <div className="container mt-5">

        <section className="mt-2">
          <MusicCards />
        </section>

        <section className="mt-5">
          <Text />
        </section>

      </div>


    </div>
  )
}

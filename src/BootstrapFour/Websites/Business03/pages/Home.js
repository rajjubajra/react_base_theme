import React from 'react';
import './Home/Home.scss';
import NavigationEight from '../components/header/NavigationEight/NavigationEight';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import HomeDesktop from './Home/HomeDesktop';



export default function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <div className="business-four">
      <ColourMode />
      <div className={`${className} container-fluid min-vh-100`}>
        <NavigationEight />


        <div className="d-none d-lg-block d-xl-block">
          <HomeDesktop />
        </div>



      </div>
    </div>
  )
}

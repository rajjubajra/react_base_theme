import React, { useEffect, useState } from 'react'
import './Tour.scss';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';
import TourPlan from './TourPlan';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';

function Tour() {
  /** DYNAMIC THEME COLOUR */
  const [className, setClassName] = useState('light');
  const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    setColourVariant(variant);
  }, [colorMode, variant])
  /** DYNAMIC THEME COLOUR CLOSED */

  return (
    <div className={`${className}  music-one min-vh-100`}>
      <ColourMode />
      <NavigationOne />
      <SocialMediaSticky />
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 col-md-8 col-sm-10">
            <h1>TOUR</h1>
            <TourPlan />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tour

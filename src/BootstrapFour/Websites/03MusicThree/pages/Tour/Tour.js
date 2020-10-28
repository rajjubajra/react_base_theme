import React, { useEffect, useState } from 'react'
import './Tour.scss';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';
import TourPlan from './TourPlan';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';
import TourDetails from './TourDetails';

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
    <div className={`${className} min-vh-100`}>
      <ColourMode />
      <NavigationOne />
      <SocialMediaSticky />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <h1>TOUR</h1>
          </div>
          <div className="col-lg-5"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-10">
            <TourPlan />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-10">
            <TourDetails />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tour

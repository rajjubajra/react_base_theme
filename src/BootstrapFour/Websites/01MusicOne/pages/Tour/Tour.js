import React, { useEffect, useState } from 'react'
import './Tour.scss';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';
import TourPlan from './TourPlan';

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
    <div className={`${className} container-fulid min-vh-100`}>
      <ColourMode />
      <NavigationOne />
      <div className="row justify-content-center mt-5">
        <div className="col-8">
          <div className="mb-5">
            <h1>TOUR</h1>
          </div>
          <TourPlan />
        </div>

      </div>

    </div>

  )
}

export default Tour

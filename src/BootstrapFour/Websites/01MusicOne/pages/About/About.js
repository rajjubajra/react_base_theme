import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';
import ColumnOne from './ColumnOne/ColumnOne';
import BoxThree from './BoxThree/BoxThree';




export const About = () => {

  /** Dyanmic colour  */
  const [className, setClassName] = useState('light');
  //const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    //setColourVariant(variant);
  }, [colorMode, variant])
  /** Dyanmic colour closed */



  return (
    <div className={className}>
      <ColourMode />
      <NavigationOne />
      <ColumnOne />
      <div className="mt-5">
        <h2 style={{ textAlign: "center" }}>Gear</h2>
        <BoxThree />
      </div>
    </div>
  )
}

export default About;

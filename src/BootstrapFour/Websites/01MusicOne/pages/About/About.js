import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector, useDispatch } from 'react-redux';
import ColumnOne from './ColumnOne/ColumnOne';
import BoxThree from './BoxThree/BoxThree';
import { actionFetchAbout } from './Redux/ActionFetchAbout';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';





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


  /** about data */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionFetchAbout());
  }, [dispatch])





  return (
    <div className="music-one">
      <div className={className}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />

        <ColumnOne />

        <div className="mt-5">
          <h2 style={{ textAlign: "center" }}>Gear</h2>
          <BoxThree />
        </div>
      </div>
    </div>
  )
}

export default About;

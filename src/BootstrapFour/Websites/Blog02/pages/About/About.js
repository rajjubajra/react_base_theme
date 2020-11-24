import React from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne'
import AboutDesktop from './AboutDesktop';
import AboutMobile from './AboutMobile';


export const About = () => {


  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <div className='blog-two min-vh-100'>
      <div className={className}>

        <ColourMode />
        <NavigationOne />
        {/** DESKTOP AND TABLET */}
        <div className="d-none d-md-block d-lg-block d-xl-block">
          <AboutDesktop />
        </div>
        {/** MOBILE */}
        <div className="d-block d-md-none d-lg-none d-xl-none">
          <AboutMobile />
        </div>

      </div>
    </div>
  )
}

export default About;

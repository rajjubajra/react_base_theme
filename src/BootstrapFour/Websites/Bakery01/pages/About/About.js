import React from 'react';
import './About.scss';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import FooterThree from '../../components/footer/FooterThree/FooterThree';
import AboutText from './AboutText';
import BoxTen from './BoxTen/BoxTen';


export const About = () => {

  const colourMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);


  const imageStyle = {
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    zIndex: -1,
  }


  return (
    <div className='bakery-one'>
      {/** BACKGROUND IMAGE */}
      <img
        style={imageStyle}
        src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/baker-4840960_1280.jpg"
        alt="" />
      <div className={colourMode}>
        <ColourMode />


        <div className="container-fluid">
          <NavigationOne />
          <div className='row min-vh-100 justify-content-center align-items-center '>
            {/** TITLE */}
            <h1 className="display-1 white">- About - </h1>
          </div>
        </div>

        <AboutText />

        {/** TEAM MEMBERS */}
        <div className="row mt-5 mb-5 justify-content-center">
          <h1>Our Team</h1>
        </div>
        <div className="row mb-5">
          <BoxTen />
        </div>
        <div className="row mb-5">
          <BoxTen />
        </div>
        <div className="row mb-5">
          <BoxTen />
        </div>




        <FooterThree />
      </div>
    </div>
  )
}

export default About;

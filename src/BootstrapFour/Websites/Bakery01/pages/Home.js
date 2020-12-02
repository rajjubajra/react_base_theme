import React from 'react';
import './Home/Home.scss';
import NavigationOne from '../components/header/NavigationOne/NavigationOne';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import HomeDesktop from './Home/HomeDesktop';



export default function Home() {

  const colourMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const imageStyle = {
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    zIndex: -2,
  }

  const bgOverLay = {
    background: "#5d3f0c5c",
    position: "absolute",
    top: 0,
    zIndex: -1,
    width: "100%",
    height: "100vh"
  }



  return (
    <div className="bakery-one">
      {/** BACKGROUND IMAGE */}
      <img
        style={imageStyle}
        src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/bread-2864703_1280.jpg"
        alt="source-pixabay-2864703" />
      <div style={bgOverLay}></div>

      <div className={colourMode}>
        <ColourMode />
        <NavigationOne />

        <HomeDesktop />


      </div>
    </div>
  )
}

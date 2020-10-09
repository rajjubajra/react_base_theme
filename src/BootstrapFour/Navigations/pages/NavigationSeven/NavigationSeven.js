import React, { useState } from 'react';
import TitleNNav from '../../../B4Components/B4Header/TitleNNav';
import Navigation from './Navigation';
import NavIconThreeLines from './ThreeLines/NavIconThreeLines';

function NavigationSeven() {

  const [view, setView] = useState(false)


  const menuStyle = {
    position: "relative",
    left: view ? "0px" : "-350px",
    maxWidth: "300px",
    transition: "left 0.5s linear"
  }

  return (
    <div className="navigation-7">
      <TitleNNav title={'Navigation 7'} href="/b4navigations" />
      <h1>Side Menu</h1>

      <span onClick={() => setView(view ? false : true)}>
        <NavIconThreeLines />
      </span>
      <div style={menuStyle}>
        <Navigation />
      </div>


    </div>
  )
}
export default NavigationSeven
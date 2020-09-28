import React, { useState } from 'react';
import Navigation from '../NavigationTwo/Navigation';
import NavIconThreeLines from './NavIconThreeLines';
import { pagelink } from '../../PageLink';




const data = [
  {
    id: "1",
    name: "Home",
    link: pagelink.home
  },
  {
    id: 2,
    name: "About",
    link: pagelink.about
  },
  {
    id: 4,
    name: "Gallert",
    link: pagelink.gallery
  },
  {
    id: 3,
    name: "Contact",
    link: pagelink.contact
  }
]


export const NavigationTwo = () => {
  const [view, setView] = useState(true);

  return (

    <div className="container-fluid">
      {/** navigation icon */}
      <div style={{ display: "relative", zIndex: "10" }}
        onClick={() => view ? setView(false) : setView(true)}>
        <NavIconThreeLines />
      </div>
      <div style={{
        position: "relative",
        transitionProperty: "top",
        transitionDuration: "3s",
        top: view ? 0 : -1000,
        margin: view ? 0 : '-90vh',
        transition: "margin 2s linear",
        width: "100%",
        height: "90vh",
        justifyContent: "center",
        display: "flex",
        background: "rgb(238, 238, 238, 0.95)",
        zIndex: "10"
      }}>
        <Navigation data={data} />
      </div>

    </div>

  )
}
export default NavigationTwo;
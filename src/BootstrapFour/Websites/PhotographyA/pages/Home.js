import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import NavigationTwo from '../components/header/NavigationTwo/NavigationTwo';
import Gallery from './Gallery';

export default function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);
  const view = useSelector(state => state.reducerShowHide.view);


  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const galleryStyle = {
    display: view ? "none" : "block",
    transitionProperty: "display",
    transitionDuration: "3s",
  }

  const pageView = {
    /** dyanamic page height in order to display Gallery scroll properlys */
    height: view ? "90vh" : ""
  }


  return (
    <div style={pageView} className={className}>
      <ColourMode />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {/** NAVIGATION */}
            <NavigationTwo />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div style={galleryStyle}>
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

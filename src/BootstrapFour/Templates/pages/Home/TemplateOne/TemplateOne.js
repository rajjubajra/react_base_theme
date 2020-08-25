import React from 'react'
import NavigationOne from './NavigationOne/NavigationOne';
import SlideOne from './SlideOne/SlideOne';
import BoxEight from './BoxEight/BoxEight';
import BoxFour from './BoxFour/BoxFour';
import FooterFour from './FooterFour/FooterFour';


function TemplateOne() {
  return (
    <div style={{ position: "relative" }} >

      {/** NAVIGATION */}
      <div style={{ position: "relative", zIndex: "20" }}>
        <NavigationOne />
      </div>


      {/** SLIDER */}
      <div style={{
        position: "absolute",
        top: "0px",
        width: "100%",
        height: "100vh"
      }}>
        <SlideOne />
      </div>

      {/** TEXT ONLY BOX */}
      <div style={{
        position: "relative",
        top: "0px",
        marginTop: "100vh",
        marginBottom: "100px"
      }}>
        <BoxEight />
      </div>

      {/** FOUR SQUARE BOXES */}
      <div>
        <BoxFour />
      </div>

      {/** FOOTER */}
      <div>
        <FooterFour />
      </div>

    </div>
  )
}

export default TemplateOne

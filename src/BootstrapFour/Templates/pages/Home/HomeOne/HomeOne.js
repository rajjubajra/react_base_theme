import React from 'react';
import NavigationOne from './NavigationOne/NavigationOne';
import SlideOne from './SlideOne/SlideOne';
import BoxEight from './BoxEight/BoxEight';
import BoxFour from './BoxFour/BoxFour';
import BoxFive from './BoxFive/BoxFive';
import FooterFour from './FooterFour/FooterFour';




function HomeOne() {


  return (
    <div style={{ position: "relative" }} >

      {/** NAVIGATION */}
      <div style={{
        position: "sticky",
        top: "0px",
        zIndex: "20",
        backgroundColor: "rgba(255,255,255,0.23)"
      }}>
        <NavigationOne />
      </div>

      {/** SLIDER */}
      <div style={{
        display: "block",
        width: "100%",
        height: "auto",
        marginTop: "-56px"
      }}>
        <SlideOne />
      </div>


      {/** TEXT ONLY BOX */}
      <div>
        <BoxEight />
      </div>

      {/** BOX for DESKTOP */}
      <div className={`d-none d-lg-block mt-5`}>
        <BoxFour />
      </div>
      {/** BOX for TABLETS */}
      <div className="d-none d-sm-block d-md-block d-lg-none mt-5">
        <BoxFive />
      </div>

      {/** BOX for MOBILE  */}
      <div className="d-block d-sm-none mt-5">
        <BoxFive />
      </div>

      {/** FOOTER */}
      <div className="mt-5">
        <FooterFour />
      </div>

    </div>
  )
}

export default HomeOne

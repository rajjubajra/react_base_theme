import React from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import Home from './Home';
import About from './About';
import BoxNine from './BoxNine/BoxNine';
import Contact from './Contact';
import FooterFour from './FooterFour/FooterFour';
import NavigationTwo from '../components/NavigationTwo/NavigationTwo';
import { useInView } from 'react-intersection-observer';


function Pages() {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  console.log("page-inview", inView);


  return (
    <div className={className}>
      <ColourMode />
      <div>
        <NavigationTwo />
      </div>

      <div className="mt-5" id="artNdesign-home">
        <Home />
      </div>




      <section ref={ref} className="mt-5">
        <div className="mt-5" id="artNdesign-about">
          <About />
        </div>

        <div className="mt-5" id="artNdesign-box-nine">
          <BoxNine />
        </div>

        <div className="mt-5" id="artNdesign-contact">
          <Contact />
        </div>

        <div className="pb-5">
          <FooterFour />
        </div>


        <div
          style={{
            position: "sticky",
            bottom: "20px",
            width: "98%",
            zIndex: "50",
            display: "flex",
            justifyContent: "flex-end"
          }}
          onClick={() => window.scroll({ top: 0 })}>
          <p style={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
            background: "#fafafa",
            outline: "1px solid #FFF",
            outlineOffset: "-10px",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "1px 1px 6px #999"
          }}>{inView ? "V" : ""}</p>
        </div>
      </section>
    </div >
  )
}

export default Pages

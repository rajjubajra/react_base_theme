import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import BoxNine from './BoxNine/BoxNine';
import BoxEight from './BoxEight/BoxEight';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import Title from './Title';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';
import FormEight from '../../components/FormEight/FormEight';


function Home() {

  /** dyanamic colour */
  const [className, setClassName] = useState('light');
  //const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    // setColourVariant(variant);
  }, [colorMode, variant])
  /** dynamic colour closed */


  useEffect(() => {
    window.scroll(0, 0);
  }, [])




  return (
    <div className="music-one">
      <div className={className}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <div id="obs-here" className="container mt-5 music-one">
          <div className="row mt-5">
            <Title />
            <div className="col-lg-8 col-md-6 col-sm-12 mb-5">
              <BoxNine />
            </div>
          </div>

          <div className="row">
            <BoxEight />
          </div>

          <div className="row">
            <FormEight />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
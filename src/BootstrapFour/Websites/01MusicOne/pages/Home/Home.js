import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import BoxNine from './BoxNine/BoxNine';
import BoxEight from './BoxEight/BoxEight';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import Title from './Title';
import SocialMedia from './socalMedia/SocialMedia';
import FormEight from '../../components/FormEight/FormEight';



export default function Home() {

  const [className, setClassName] = useState('light');
  const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    setColourVariant(variant);
  }, [colorMode, variant])


  return (
    <div className={className}>
      <ColourMode />
      <NavigationOne />
      <div className="container mt-5">
        <div className="row mt-5">
          <Title />
          <SocialMedia />
          <div className="col-lg-8 col-md-6 col-sm-12">
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
  )
}

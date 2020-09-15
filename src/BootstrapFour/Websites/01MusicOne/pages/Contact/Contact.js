import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import FormOne from './FormOne';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import PhotoMusic from '../../components/PhotoPlaceholder/PhotoMusic';


export const Contact = () => {

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
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-9"><h5>Contact Form</h5></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 mt-5">
            <PhotoMusic width="200px" height="400px" />
          </div>
          <div className="col-lg-8">
            <ContactForm />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact;

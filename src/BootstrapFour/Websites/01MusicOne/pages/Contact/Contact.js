import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';
import FormEight from '../../components/FormEight/FormEight';
import PhotoMusic from '../../components/PhotoPlaceholder/PhotoMusic';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';


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
      <SocialMediaSticky />
      <div className="container min-vh-100">
        <div className="row justify-content-center mt-5">
          <div className="col"><h1>Contact</h1></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 mt-5">
            <PhotoMusic width="200px" height="400px" />
            <div className="mt-5">
              <h2>General Enquiries</h2>
              <p>Email: info@mymusicexample.com</p>
            </div>
            <div className="mt-5">
              <h2>Booking Agencies</h2>
              <p>America</p>
              <p>Austreial</p>
              <p>Asia</p>
              <p>Europe</p>
              <p>Africa</p>
            </div>
          </div>
          <div className="col-lg-8">
            <FormEight />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact;

import React from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';


export const Contact = () => {
  /** dyanamic color */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);

  return (
    <div className='blog-one'>
      <ColourMode />
      <NavigationOne />

      <div className={`${className} container mt-5 mb-5`}>
        <div className="row">
          <div className="col"><h1>Contact</h1></div>
        </div>
      </div>
    </div>
  )
}

export default Contact;

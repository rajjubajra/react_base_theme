import React from 'react'
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import NavigationBar from '../components/header/NavigationBar';


export const Contact = () => {

  /** DYANMIC COLOR THEME */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);
  /** COLOR THEME CLOSED */


  return (
    <div className={`music-zero ${className}`}>
      <ColourMode />
      <NavigationBar />
      <div className="container mt-5 min-vh-100">
        <div className="row">
          <div className="col">
            <h1>Contact</h1>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Contact;
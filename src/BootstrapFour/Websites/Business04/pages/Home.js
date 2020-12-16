import React from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';


export default function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <div className={className}>
      <ColourMode />
      {/** Navigation */}
      <div className="constier">
        <div className="row min-vh-100">
          <div className="col">
            <h1>BUSINESS FOUR</h1>
          </div>
        </div>
      </div>



    </div>
  )
}

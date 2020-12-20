import React from 'react';
import { useDispatch } from 'react-redux';
import ClockKathmandu from './ClockKathmandu';
import ClockLondon from './ClockLondon';
import NavIconThreeLines from './NavIconThreeLines';
import { MainMenuShowHide } from './Redux/ActionShowHide';


export const NavigationTwo = () => {

  const dispatch = useDispatch();


  return (
    <div style={{
      display: "block",
      position: "fixed",
      width: "100%",
      backgroundColor: "#ffffff",
      zIndex: "50"
    }}>
      <div className='container-fluid'>
        <div className="row">
          <div className="col d-flex justify-content-between">

            <div onClick={() => dispatch(MainMenuShowHide())}>
              {/** navigation icon */}
              <NavIconThreeLines />
            </div>

            <div className="mt-2"><p>London: <ClockLondon /></p></div>

            <div className="mt-2"><p>Kathmandu: <ClockKathmandu /></p></div>

            <div className="mt-2 pr-3">[]</div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default NavigationTwo;
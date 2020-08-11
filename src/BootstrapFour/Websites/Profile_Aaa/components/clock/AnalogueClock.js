import React from 'react';
import './AnalogueClock.scss';
import AnalogClockTimLines from './AnalogClockTimLines';


function AnalogueClock(props) {

  return (
    <div className="analogue-clock">

      <div className="clock-centre-point"></div>

      <div
        className="hour-hand"
        style={{ transform: `rotate(${props.hour * 30}deg)` }}
      ></div>
      <div
        className="minute-hand"
        style={{ transform: `rotate(${props.minute * 6}deg)` }}
      ></div>
      <div
        className="seconds-hand"
        style={{ transform: `rotate(${props.seconds * 6}deg)` }}
      ></div>
      <AnalogClockTimLines />
    </div>
  )

}

export default AnalogueClock;
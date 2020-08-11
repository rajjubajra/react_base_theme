import React from 'react'
import './DigitalClock.scss';

function DigitalClock(props) {
  return (
    <div className="digital-clock">
      <h1>{props.hour} : {props.minute} : {props.seconds}</h1>
    </div>
  )
}

export default DigitalClock

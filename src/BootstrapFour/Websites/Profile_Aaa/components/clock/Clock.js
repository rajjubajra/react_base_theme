import React, { useEffect, useState } from 'react';
import './AnalogueClock.scss';
import AnalogClockTimLines from './AnalogClockTimLines';



function Clock() {

  const date = new Date();

  const [seconds, setSeconds] = useState(date.getSeconds());
  const [minute, setMinute] = useState(date.getMinutes());
  const [hour, setHour] = useState(date.getHours());


  useEffect(() => {
    /** seconds */
    const interval = setInterval(() => setSeconds(date.getSeconds()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);

  useEffect(() => {
    /** Minute */
    const interval = setInterval(() => setMinute(date.getMinutes()), 60000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);

  useEffect(() => {
    /** Minute */
    const interval = setInterval(() => setHour(date.getHours()), 60000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);


  return (
    <>

      <div>{hour} : {minute} : {seconds}</div>
      <div className="analogue-clock">
        <div className="clock-centre-point"></div>
        <div className="hour-hand"
          style={{ transform: `rotate(${hour * 30}deg)` }}
        ></div>
        <div className="minute-hand"
          style={{ transform: `rotate(${minute * 6}deg)` }}
        ></div>
        <div
          className="seconds-hand"
          style={{ transform: `rotate(${seconds * 6}deg)` }}
        ></div>
        <AnalogClockTimLines />
      </div>


    </>
  )

}

export default Clock;
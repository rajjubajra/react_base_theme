import React from 'react';
import './Icons.scss';
import IconClose from './IconClose';
import IconEmail from './IconEmail';
import IconUp from './IconUp/IconUp';
import IconDown from './IconDown/IconDown';



function Icons() {
  return (

    <div className="icons">
      <h1>I made it</h1>
      <div className="icon-list">
        <div className="icon-holder">
          <p>Up Arrow</p>
          <IconClose />
        </div>
        <div className="icon-holder">
          <p>Envelop - Open</p>
          <IconEmail />
        </div>
        <div className="icon-holder">
          <p>Arrow up</p>
          <IconUp />
        </div>
        <div className="icon-holder">
          <p>Arrow down</p>
          <IconDown />
        </div>
        <div className="icon-holder">
          <p>Close - Arrow</p>
          <IconClose />
        </div>
        <div className="icon-holder">
          <p>Close - Arrow</p>
          <IconClose />
        </div>
        <div className="icon-holder">
          <p>Close - Arrow</p>
          <IconClose />
        </div>
        <div className="icon-holder">
          <p>Close - Arrow</p>
          <IconClose />
        </div>
        <div className="icon-holder">
          <p>Close - Arrow</p>
          <IconClose />
        </div>
      </div>
    </div>
  )
}
export default Icons

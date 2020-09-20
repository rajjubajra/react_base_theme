import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import Applications from '../Applications/Applications';
import MeghaMenuBootstrap4 from '../components/Navigation/MeghaMenuBootstrap4'

function RouterApplications() {
  const [btnShowHide] = useState(true);

  return (
    <>
      <Route path="/applications">
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={`App ${btnShowHide} ? 'show' : 'hide'`}>
            <MeghaMenuBootstrap4 />
          </div>
          <div>
            <Applications />
          </div>
        </div>
      </Route>
    </>
  )
}

export default RouterApplications

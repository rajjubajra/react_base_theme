import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MeghaMenuBootstrap4 from '../components/Navigation/MeghaMenuBootstrap4';
import Ecommerce from '../Ecommerce/Ecommerce';
import LanPasaa from '../Ecommerce/LanPasaa/LanPasaa';


function RouterEcommerce() {
  const [btnShowHide] = useState(true);
  return (
    <>
      <Route path="/ecommerce">
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={`App ${btnShowHide} ? 'show' : 'hide'`}>
            <MeghaMenuBootstrap4 />
          </div>
          <div>
            <Ecommerce />
          </div>
        </div>
      </Route>


      {/** Ecommerce websites */}
      <LanPasaa />

    </>
  )
}

export default RouterEcommerce

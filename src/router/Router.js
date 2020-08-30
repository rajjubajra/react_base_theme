import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CopyRightFooter from '../components/CopyRightFooter/CopyRightFooter';
import RouterComponents from './RouterComponents';
import RouterNonCssFramworkWebsites from './RouterNonCssFrameworkWebsites';
import RouterBootstrapFour from './RouterBootstrapFour';
// import MeghaMenu from '../components/Navigation/MeghaMenu';
// import ComingSoon from '../components/Websites/ComingSoon/ComingSoon';
import ComingSoonB4 from '../BootstrapFour/ComingSoonB4/ComingSoonB4';
import RouterComponentTest from './RouterComponentTest';


/**
 * NOTE: 
 * CSS class "App" is only for Custom-made css.
 * Do not use "App" class on Bootstrap or other CSS framework 
 */


const Router = () => {

  const [btnShowHide] = useState(true);

  return (
    <>
      <BrowserRouter>
        {/* <Switch>
          <Route exact path="/" >
            <div className={`App ${btnShowHide} ? 'with-menu' : 'without-menu'`}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <ComingSoon />
            </div>
          </Route>
        </Switch> */}

        <Switch>
          <Route exact path="/" >
            <div>
              <div>
                <ComingSoonB4 />
              </div>
            </div>
          </Route>
        </Switch>





        {/** RE-USABLE COMPONENTS *************************************/}
        <Switch>
          <RouterComponents />
        </Switch>

        {/** WEBSITES PAGE *************************************/}
        <Switch>
          <RouterNonCssFramworkWebsites />
        </Switch>

        {/** WEBSITES WITH BOOTSTRAP-4  ***************************/}
        <Switch>
          <RouterBootstrapFour />
        </Switch>

        <Switch>
          <RouterComponentTest />
        </Switch>


        {/** COPYRIGHT COMPONENT  *************************************/}
        <div className="App copy-right-footer">
          <CopyRightFooter />
        </div>

      </BrowserRouter>
    </>
  )
}

export default Router

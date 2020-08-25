import React from 'react';
import { Route } from 'react-router-dom';
import BoxOne from './BoxOne/BoxOne';
import BoxTwo from './BoxTwo/BoxTwo';
import BoxThree from './BoxThree/BoxThree';
import BoxFour from './BoxFour/BoxFour';
import BoxFive from './BoxFive/BoxFive';
import BoxSix from './BoxSix/BoxSix';
import BoxEight from './BoxEight/BoxEight';
import BigImageSix from './BoxSix/BigImageSix';

import { pagelink } from '../PageLink';
import Pages from './Pages';
import BoxSeven from './BoxSeven/BoxSeven';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={BoxOne} />
      <Route exact path={`/${pagelink.two}`} component={BoxTwo} />
      <Route exact path={`/${pagelink.three}`} component={BoxThree} />
      <Route exact path={`/${pagelink.four}`} component={BoxFour} />
      <Route exact path={`/${pagelink.five}`} component={BoxFive} />
      <Route exact path={`/${pagelink.six}`} component={BoxSix} />
      <Route exact path={`/${pagelink.viewSix}/:id`} component={BigImageSix} />
      <Route exact path={`/${pagelink.seven}`} component={BoxSeven} />
      <Route exact path={`/${pagelink.eight}`} component={BoxEight} />
    </>
  )
}
export default RoutePages

import React from 'react';
import { Route } from 'react-router-dom';
import BoxOne from './BoxOne/BoxOne';
import BoxTwo from './BoxTwo/BoxTwo';
import BoxThree from './BoxThree/BoxThree';
import BoxFour from './BoxFour/BoxFour';
import BoxFive from './BoxFive/BoxFive';

import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={BoxOne} />
      <Route exact path={`/${pagelink.two}`} component={BoxTwo} />
      <Route exact path={`/${pagelink.three}`} component={BoxThree} />
      <Route exact path={`/${pagelink.four}`} component={BoxFour} />
      <Route exact path={`/${pagelink.five}`} component={BoxFive} />
    </>
  )
}
export default RoutePages

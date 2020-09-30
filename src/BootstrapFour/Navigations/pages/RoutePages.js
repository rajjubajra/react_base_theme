import React from 'react';
import { Route } from 'react-router-dom';
import NavigationOne from './NavigationOne/NavigationOne';
import NavigationTwo from './NavigationTwo/NavigationTwo';
import NavigationThree from './NavigationThree/NavigationThree';
import { pagelink } from '../PageLink';
import Pages from './Pages';
import NavigationFour from './NavigationFour/NavigationFour';
import NavigationFive from './NavigationFive/NavigationFive';

function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={NavigationOne} />
      <Route exact path={`/${pagelink.two}`} component={NavigationTwo} />
      <Route exact path={`/${pagelink.three}`} component={NavigationThree} />
      <Route exact path={`/${pagelink.four}`} component={NavigationFour} />
      <Route exact path={`/${pagelink.five}`} component={NavigationFive} />
    </>
  )
}
export default RoutePages
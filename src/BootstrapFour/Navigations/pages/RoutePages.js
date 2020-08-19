import React from 'react';
import { Route } from 'react-router-dom';
import NavigationOne from './NavigationOne/NavigationOne';
import NavigationTwo from './NavigationTwo/NavigationTwo';
import NavigationThree from './NavigationThree';
import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={NavigationOne} />
      <Route exact path={`/${pagelink.two}`} component={NavigationTwo} />
      <Route exact path={`/${pagelink.three}`} component={NavigationThree} />
    </>
  )
}
export default RoutePages

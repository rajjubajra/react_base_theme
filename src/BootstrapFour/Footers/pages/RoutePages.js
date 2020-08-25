import React from 'react';
import { Route } from 'react-router-dom';
import FooterOne from './FooterOne/FooterOne';
import FooterTwo from './FooterTwo/FooterTwo';
import FooterThree from './FooterThree/FooterThree';
import FooterFour from './FooterFour/FooterFour';
import FooterFive from './FooterFive/FooterFive';
import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={FooterOne} />
      <Route exact path={`/${pagelink.two}`} component={FooterTwo} />
      <Route exact path={`/${pagelink.three}`} component={FooterThree} />
      <Route exact path={`/${pagelink.four}`} component={FooterFour} />
      <Route exact path={`/${pagelink.five}`} component={FooterFive} />
    </>
  )
}

export default RoutePages
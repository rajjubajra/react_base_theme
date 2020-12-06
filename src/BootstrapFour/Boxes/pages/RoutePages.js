import React from 'react';
import { Route } from 'react-router-dom';
import BoxOne from './BoxOne/BoxOne';
import BoxTwo from './BoxTwo/BoxTwo';
import BoxThree from './BoxThree/BoxThree';
import BoxFour from './BoxFour/BoxFour';
import BoxFive from './BoxFive/BoxFive';
import BoxSix from './BoxSix/BoxSix';
import BigImageSix from './BoxSix/BigImageSix';

import BoxSeven from './BoxSeven/BoxSeven';
import BoxEight from './BoxEight/BoxEight';
import BoxNine from './BoxNine/BoxNine';
import BoxTen from './BoxTen/BoxTen';
import BoxEleven from './BoxEleven/BoxEleven';
import BoxTwelve from './BoxTwelve/BoxTwelve';
import BoxThirteen from './BoxThirteen/BoxThirteen';
import BoxFourteen from './BoxFourteen/BoxFourteen';
import BoxFifteen from './BoxFifteen/BoxFifteen';
import BoxSixteen from './BoxSixteen/BoxSixteen';
import BoxSeventeen from './BoxSeventeen/BoxSeventeen';
import BoxEighteen from './BoxEighteen/BoxEighteen';
import BoxNineteen from './BoxNineteen/BoxNineteen';


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
      <Route exact path={`/${pagelink.six}`} component={BoxSix} />
      <Route exact path={`/${pagelink.viewSix}/:id`} component={BigImageSix} />
      <Route exact path={`/${pagelink.seven}`} component={BoxSeven} />
      <Route exact path={`/${pagelink.eight}`} component={BoxEight} />
      <Route exact path={`/${pagelink.nine}`} component={BoxNine} />
      <Route exact path={`/${pagelink.ten}`} component={BoxTen} />
      <Route exact path={`/${pagelink.eleven}`} component={BoxEleven} />
      <Route exact path={`/${pagelink.twelve}`} component={BoxTwelve} />
      <Route exact path={`/${pagelink.thirteen}`} component={BoxThirteen} />
      <Route exact path={`/${pagelink.fourteen}`} component={BoxFourteen} />
      <Route exact path={`/${pagelink.fifteen}`} component={BoxFifteen} />
      <Route exact path={`/${pagelink.sixteen}`} component={BoxSixteen} />
      <Route exact path={`/${pagelink.seventeen}`} component={BoxSeventeen} />
      <Route exact path={`/${pagelink.eighteen}`} component={BoxEighteen} />
      <Route exact path={`/${pagelink.nineteen}`} component={BoxNineteen} />
    </>
  )
}
export default RoutePages

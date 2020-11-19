import React from 'react';
import { Route } from 'react-router-dom';
import FormOne from './FormOne/FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import FormFour from './FormFour';
import FormFive from './FormFive';
import FormSix from './FormSix';
import { pagelink } from '../PageLink';
import Pages from './Pages';
import FormSeven from './FormSeven/FormSeven';
import FormEight from './FormEight/FormEight';
import FormNine from './FormNine/FormNine';



function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={FormOne} />
      <Route exact path={`/${pagelink.two}`} component={FormTwo} />
      <Route exact path={`/${pagelink.three}`} component={FormThree} />
      <Route exact path={`/${pagelink.four}`} component={FormFour} />
      <Route exact path={`/${pagelink.five}`} component={FormFive} />
      <Route exact path={`/${pagelink.six}`} component={FormSix} />
      <Route exact path={`/${pagelink.seven}`} component={FormSeven} />
      <Route exact path={`/${pagelink.eight}`} component={FormEight} />
      <Route exact path={`/${pagelink.nine}`} component={FormNine} />
    </>
  )
}

export default RoutePages

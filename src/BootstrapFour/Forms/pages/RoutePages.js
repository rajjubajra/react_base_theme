import React from 'react';
import { Route } from 'react-router-dom';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import FormFour from './FormFour';
import { pagelink } from '../PageLink';
import Pages from './Pages';



function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={FormOne} />
      <Route exact path={`/${pagelink.two}`} component={FormTwo} />
      <Route exact path={`/${pagelink.three}`} component={FormThree} />
      <Route exact path={`/${pagelink.four}`} component={FormFour} />
    </>
  )
}

export default RoutePages

import React from 'react';
import { Route } from 'react-router-dom';
import BoxOne from './BoxOne';
import BoxTwo from './BoxTwo';
import BoxThree from './BoxThree';
import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={BoxOne} />
      <Route exact path={`/${pagelink.two}`} component={BoxTwo} />
      <Route exact path={`/${pagelink.three}`} component={BoxThree} />
    </>
  )
}

export default RoutePages

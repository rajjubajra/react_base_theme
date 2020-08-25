import React from 'react';
import { Route } from 'react-router-dom';
import BaseCompoOne from './BaseCompoOne';
import BaseCompoTwo from './BaseCompoTwo';
import BaseCompoThree from './BaseCompoThree';
import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={BaseCompoOne} />
      <Route exact path={`/${pagelink.two}`} component={BaseCompoTwo} />
      <Route exact path={`/${pagelink.three}`} component={BaseCompoThree} />
    </>
  )
}

export default RoutePages

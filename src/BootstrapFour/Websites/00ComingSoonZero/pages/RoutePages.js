import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import { pagelink } from '../PageLink';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
    </>
  )
}

export default RoutePages

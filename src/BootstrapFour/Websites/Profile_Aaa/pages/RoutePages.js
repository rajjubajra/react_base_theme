import React from 'react';
import { Route } from 'react-router-dom';
import Page from './Page';
// import Home from './Home';
// import Project from './Project';
// import Contact from './Contact';
// import Work from './Work';
import { pagelink } from '../PageLink';




function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Page} />
      {/* <Route exact path={`/${pagelink.work}`} component={Work} />
      <Route exact path={`/${pagelink.project}`} component={Project} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} /> */}
    </>
  )
}

export default RoutePages

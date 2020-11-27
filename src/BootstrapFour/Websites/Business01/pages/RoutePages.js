import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About/About';
import Service from './Service/Service';
import Contact from './Contact/Contact';
import { pagelink } from '../PageLink';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.services}`} component={Service} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
    </>
  )
}

export default RoutePages

import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './about/About';
import Contact from './contact/Contact';
import { pagelink } from '../PageLink';


function RoutePhotography() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
    </>
  )
}

export default RoutePhotography

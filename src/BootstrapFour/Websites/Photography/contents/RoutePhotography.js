import React from 'react';
import { Route } from 'react-router-dom';
import PageGallery from './PageGallery';
import About from './about/About';
import Contact from './contact/Contact';


function RoutePhotography() {
  return (
    <>
      <Route exact path="/photography" component={PageGallery} />
      <Route exact path="/photography-about" component={About} />
      <Route exact path="/photography-contact" component={Contact} />
    </>
  )
}

export default RoutePhotography

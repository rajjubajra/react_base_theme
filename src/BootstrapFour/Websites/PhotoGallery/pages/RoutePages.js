import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { pagelink } from '../PageLink';
import Gallery from './Gallery';
import BigImageSix from './BoxSix/BigImageSix';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.gallery}/:id`} component={Gallery} />
      <Route exact path={`/${pagelink.viewSix}/:id`} component={BigImageSix} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
    </>
  )
}

export default RoutePages

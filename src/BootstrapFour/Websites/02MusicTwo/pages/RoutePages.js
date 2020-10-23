import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { pagelink } from '../PageLink';
import MusicCardDetail from './musicCards/MusicCardDetail';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
      <Route exact path={`/${pagelink.playAll}/:id`} component={MusicCardDetail} />
    </>
  )
}

export default RoutePages

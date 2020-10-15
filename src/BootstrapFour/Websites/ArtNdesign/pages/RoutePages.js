import React from 'react';
import { Route } from 'react-router-dom';
import Pages from './Pages';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { pagelink } from '../PageLink';
import Gallerys from './Gallerys';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.gallery}`} component={Gallerys} />

      {/* <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} /> */}
    </>
  )
}

export default RoutePages

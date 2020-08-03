import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


function RoutePages() {
  return (
    <>
      <Route exact path="/basetheme" component={Home} />
      <Route exact path="/basetheme-about" component={About} />
      <Route exact path="/basetheme-contact" component={Contact} />
    </>
  )
}

export default RoutePages

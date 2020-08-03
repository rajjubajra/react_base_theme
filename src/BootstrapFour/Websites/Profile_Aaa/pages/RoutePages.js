import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


function RoutePages() {
  return (
    <>
      <Route exact path="/profile-aaa" component={Home} />
      <Route exact path="/profile-aaa-about" component={About} />
      <Route exact path="/profile-aaa-contact" component={Contact} />
    </>
  )
}

export default RoutePages

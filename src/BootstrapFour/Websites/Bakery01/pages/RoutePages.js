import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About/About';
import Products from './Products/Products';
import Contact from './Contact';
import { pagelink } from '../PageLink';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.product}/:grp`} component={Products} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
    </>
  )
}

export default RoutePages

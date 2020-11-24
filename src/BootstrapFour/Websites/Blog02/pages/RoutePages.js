import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About/About';
import Contact from './Contact/Contact';
import { pagelink } from '../PageLink';
import ReadMore from '../pages/ReadMore/ReadMore';
import Blog from './Blog/Blog';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.blog}`} component={Blog} />
      <Route exact path={`/${pagelink.readmore}/:nid`} component={ReadMore} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
    </>
  )
}

export default RoutePages

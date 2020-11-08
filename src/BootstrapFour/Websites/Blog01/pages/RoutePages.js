import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import BlogByTaxonomy from './Blog/BlogByTaxonomy';
import ReadMore from './ReadMore/ReadMore';
import { pagelink } from '../PageLink';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.blogs}`} component={Blog} />
      <Route exact path={`/${pagelink.blogByTaxonomy}/:tid`} component={BlogByTaxonomy} />

      <Route exact path={`/${pagelink.contact}`} component={Contact} />
      <Route exact path={`/${pagelink.readMore}/:nid`} component={ReadMore} />
    </>
  )
}

export default RoutePages

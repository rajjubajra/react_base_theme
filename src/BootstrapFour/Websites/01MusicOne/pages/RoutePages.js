import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Album from './Album/Album';
import News from './News/News';
import Contact from './Contact/Contact';
import BlogReadMoreFour from './Album/BlogFour/BlogReadMoreFour';
import BlogReadMoreOne from './News/BlogOne/BlogReadMore';
import { pagelink } from '../PageLink';



function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.gallery}`} component={Gallery} />
      <Route exact path={`/${pagelink.album}`} component={Album} />
      <Route exact path={`/${pagelink.news}`} component={News} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
      <Route exact path={`/${pagelink.readmore}/:id`} component={BlogReadMoreFour} />
      <Route exact path={`/${pagelink.readmoreNews}/:id`} component={BlogReadMoreOne} />
    </>
  )
}
export default RoutePages
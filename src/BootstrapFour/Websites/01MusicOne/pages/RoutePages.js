import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import News from './News/News';
import Contact from './Contact/Contact';

import BlogReadMoreOne from './News/BlogOne/BlogReadMore';
import { pagelink } from '../PageLink';
import Tour from './Tour/Tour';
import Shop from './Shop/Shop';
import Music from './Music/Music';
import Album from './Music/Album';



function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.tour}`} component={Tour} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.gallery}`} component={Gallery} />
      <Route exact path={`/${pagelink.albums}`} component={Music} />
      <Route exact path={`/${pagelink.album}/:id`} component={Album} />
      <Route exact path={`/${pagelink.news}`} component={News} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
      <Route exact path={`/${pagelink.shop}`} component={Shop} />

      <Route exact path={`/${pagelink.readmoreNews}/:id`} component={BlogReadMoreOne} />
    </>
  )
}
export default RoutePages
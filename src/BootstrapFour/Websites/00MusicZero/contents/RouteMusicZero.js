import React from 'react'
import { Route } from 'react-router-dom';
import Page from './Page';
import Aboutus from './aboutus/Aboutus';
import Contact from './contact/Contact';
import MusicCardDetail from './musicCards/MusicCardDetail';


function RouteMusicZero() {

  return (
    <>
      <Route exact path="/music-zero" component={Page} />
      <Route path='/music-zero-about' component={Aboutus} />
      <Route path="/music-zero-contact" component={Contact} />
      <Route path="/music-zero-detail/:id" component={MusicCardDetail} />
    </>
  )
}

export default RouteMusicZero

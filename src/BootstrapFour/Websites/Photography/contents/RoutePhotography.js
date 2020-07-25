import React from 'react';
import { Route } from 'react-router-dom';
import PageGallery from './PageGallery';


function RoutePhotography() {
  return (
    <>
      <Route exact path="/photography" component={PageGallery} />
    </>
  )
}

export default RoutePhotography

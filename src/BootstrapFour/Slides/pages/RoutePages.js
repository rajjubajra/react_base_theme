import React from 'react';
import { Route } from 'react-router-dom';
import SlideOne from './SlideOne/SlideOne';
import SlideTwo from './SlideTwo/SlideTwo';
import SlideThree from './SlideThree/SlideThree';
import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={SlideOne} />
      <Route exact path={`/${pagelink.two}`} component={SlideTwo} />
      <Route exact path={`/${pagelink.three}`} component={SlideThree} />
    </>
  )
}
export default RoutePages
import React from 'react';
import { Route } from 'react-router-dom';
import BlogOne from './BlogOne';
import BlogTwo from './BlogTwo';
import BlogThree from './BlogThree';
import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={BlogOne} />
      <Route exact path={`/${pagelink.two}`} component={BlogTwo} />
      <Route exact path={`/${pagelink.three}`} component={BlogThree} />
    </>
  )
}
export default RoutePages
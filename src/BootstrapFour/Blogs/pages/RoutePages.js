import React from 'react';
import { Route } from 'react-router-dom';
import BlogOne from './BlogOne/BlogOne';
import BlogTwo from './BlogTwo/BlogTwo';
import BlogThree from './BlogThree/BlogThree';
import BlogFour from './BlogFour/BlogFour';
import BlogReadMore from './BlogOne/BlogReadMore';
import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={BlogOne} />
      <Route exact path={`/${pagelink.two}`} component={BlogTwo} />
      <Route exact path={`/${pagelink.three}`} component={BlogThree} />
      <Route exact path={`/${pagelink.four}`} component={BlogFour} />
      <Route exact path={`/${pagelink.readmoreOne}/:id`} component={BlogReadMore} />


    </>
  )
}
export default RoutePages
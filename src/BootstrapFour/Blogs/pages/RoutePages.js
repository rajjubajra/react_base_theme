import React from 'react';
import { Route } from 'react-router-dom';

import BlogOne from './BlogOne/BlogOne';
import BlogReadMore from './BlogOne/BlogReadMore';
import BlogTwo from './BlogTwo/BlogTwo';
import BlogReadMoreTwo from './BlogTwo/BlogReadMoreTwo';
import BlogThree from './BlogThree/BlogThree';
import BlogReadMoreThree from './BlogThree/BlogReadMoreThree';
import BlogFour from './BlogFour/BlogFour';
import BlogReadMoreFour from './BlogFour/BlogReadMoreFour';
import BlogFive from './BlogFive/BlogFive';
import BlogReadMoreFive from './BlogFive/BlogReadMoreFive';
import BlogSix from './BlogSix/BlogSix';
import BlogReadMoreSix from './BlogSix/BlogReadMoreSix';


import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route
        exact path={`/${pagelink.pages}`}
        component={Pages} />
      <Route
        exact path={`/${pagelink.readmoreOne}/:id`}
        component={BlogReadMore} />

      <Route
        exact path={`/${pagelink.one}`}
        component={BlogOne} />


      <Route
        exact path={`/${pagelink.two}`}
        component={BlogTwo} />
      <Route
        exact path={`/${pagelink.readmoreTwo}/:id`}
        component={BlogReadMoreTwo} />


      <Route
        exact path={`/${pagelink.three}`}
        component={BlogThree} />
      <Route
        exact path={`/${pagelink.readmoreThree}/:id`}
        component={BlogReadMoreThree} />


      <Route
        exact path={`/${pagelink.four}`}
        component={BlogFour} />
      <Route
        exact path={`/${pagelink.readmoreFour}/:id`}
        component={BlogReadMoreFour} />


      <Route exact path={`/${pagelink.five}`}
        component={BlogFive} />
      <Route
        exact path={`/${pagelink.readmoreFive}/:id`}
        component={BlogReadMoreFive} />

      <Route exact path={`/${pagelink.six}`}
        component={BlogSix} />
      <Route
        exact path={`/${pagelink.readmoreSix}/:id`}
        component={BlogReadMoreSix} />

    </>
  )
}
export default RoutePages
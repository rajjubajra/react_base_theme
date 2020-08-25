import React from 'react';
import { Route } from 'react-router-dom';
import BlogOne from './BlogOne/BlogOne';
import BlogTwo from './BlogTwo/BlogTwo';
import BlogThree from './BlogThree/BlogThree';
import BlogFour from './BlogFour/BlogFour';
import BlogFive from './BlogFive/BlogFive';
import BlogReadMore from './BlogOne/BlogReadMore';
import BlogReadMoreTwo from './BlogTwo/BlogReadMoreTwo';
import BlogReadMoreThree from './BlogThree/BlogReadMoreThree';
import BlogReadMoreFour from './BlogFour/BlogReadMoreFour';
import BlogReadMoreFive from './BlogFive/BlogReadMoreFive';
import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`}
        component={Pages} />
      <Route exact path={`/${pagelink.one}`}
        component={BlogOne} />
      <Route exact path={`/${pagelink.two}`}
        component={BlogTwo} />
      <Route exact path={`/${pagelink.three}`}
        component={BlogThree} />
      <Route exact path={`/${pagelink.four}`}
        component={BlogFour} />
      <Route exact path={`/${pagelink.five}`}
        component={BlogFive} />
      <Route exact path={`/${pagelink.readmoreOne}/:id`}
        component={BlogReadMore} />
      <Route exact path={`/${pagelink.readmoreTwo}/:id`}
        component={BlogReadMoreTwo} />
      <Route exact path={`/${pagelink.readmoreThree}/:id`}
        component={BlogReadMoreThree} />
      <Route exact path={`/${pagelink.readmoreFour}/:id`}
        component={BlogReadMoreFour} />
      <Route exact path={`/${pagelink.readmoreFive}/:id`}
        component={BlogReadMoreFive} />
    </>
  )
}
export default RoutePages
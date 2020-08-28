import React from 'react';
import { Route } from 'react-router-dom';
import HomeOne from './Home/HomeOne/HomeOne';
import TemplateTwo from './TemplateTwo/TemplateTwo';
import TemplateThree from './TemplateThree/TemplateThree';
import { pagelink } from '../PageLink';
import Pages from './Pages';

import HomeTwo from './Home/HomeTwo/HomeTwo';
import BlogReadMoreFive from './Home/HomeTwo/BlogFive/BlogReadMoreFive';

function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.homeOne}`} component={HomeOne} />

      <Route exact path={`/${pagelink.homeTwo}`} component={HomeTwo} />
      <Route exact path={`/${pagelink.homeTwoBlogReadMore}/:id`} component={BlogReadMoreFive} />

      <Route exact path={`/${pagelink.about}`} component={TemplateTwo} />
      <Route exact path={`/${pagelink.contact}`} component={TemplateThree} />
    </>
  )
}
export default RoutePages
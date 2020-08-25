import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import TemplateTwo from './TemplateTwo/TemplateTwo';
import TemplateThree from './TemplateThree/TemplateThree';
import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={TemplateTwo} />
      <Route exact path={`/${pagelink.contact}`} component={TemplateThree} />
    </>
  )
}

export default RoutePages
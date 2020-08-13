import React from 'react';
import { Route } from 'react-router-dom';
import ColumnOne from './ColumnOne';
import ColumnTwo from './ColumnTwo';
import ColumnThree from './ColumnThree';
import { pagelink } from '../PageLink';
import Pages from './Pages';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={ColumnOne} />
      <Route exact path={`/${pagelink.two}`} component={ColumnTwo} />
      <Route exact path={`/${pagelink.three}`} component={ColumnThree} />
    </>
  )
}

export default RoutePages

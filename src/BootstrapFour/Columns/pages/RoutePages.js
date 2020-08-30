import React from 'react';
import { Route } from 'react-router-dom';
import Pages from './Pages';
import { pagelink } from '../PageLink';
import ColumnOne from './ColumnOne/ColumnOne';
import ColumnTwo from './ColumnTwo/ColumnTwo';
import ColumnThree from './ColumnThree/ColumnThree';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.page}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={ColumnOne} />
      <Route exact path={`/${pagelink.two}`} component={ColumnTwo} />
      <Route exact path={`/${pagelink.three}`} component={ColumnThree} />
    </>
  )
}

export default RoutePages
import React from 'react';
import { Route } from 'react-router-dom';
import ShopOne from './ShopOne';
import ShopTwo from './ShopTwo';
import ShopThree from './ShopThree';
import { pagelink } from '../PageLink';
import Pages from './Pages';

function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.pages}`} component={Pages} />
      <Route exact path={`/${pagelink.one}`} component={ShopOne} />
      <Route exact path={`/${pagelink.two}`} component={ShopTwo} />
      <Route exact path={`/${pagelink.three}`} component={ShopThree} />
    </>
  )
}
export default RoutePages
import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import MeghaMenu from '../components/Navigation/MeghaMenu';
import Websites from '../NonCssFrameworkWebsites/Websites';
import Lotus from '../NonCssFrameworkWebsites/Lotus/Lotus';
import LanPasaa from '../NonCssFrameworkWebsites/LanPasaa/LanPasaa';
import Coffee from '../NonCssFrameworkWebsites/Coffee/Coffee';
import Wheat from '../NonCssFrameworkWebsites/Wheat/Wheat';
import SearchRecipes from '../NonCssFrameworkWebsites/SearchRecipes/SearchRecipes';
import Covide from '../NonCssFrameworkWebsites/Covid/Covid';




function RouterWebsites() {
  const [btnShowHide] = useState(true);
  return (
    <div className="App">
      {/** WEBSITES NAV PAGE *****************************************/}
      <Route path="/websites" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Websites />
        </div>
      </Route>

      {/** Route included withing following components */}
      <Lotus />
      <LanPasaa />
      <Coffee />
      <Wheat />

      {/** EXTERNAL API BASE WEBSITE */}
      <SearchRecipes />
      <Covide />

    </div>
  )
}

export default RouterWebsites


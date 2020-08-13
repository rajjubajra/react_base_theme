import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import BootsrapFour from '../BootstrapFour/BootstrapFour';
import BaseTheme from '../BootstrapFour/Websites/BaseTheme/Basetheme';
import Portfolio2020 from '../BootstrapFour/Websites/Portfolio2020/Portfolio2020';
import MeghaMenuBootstrap4 from '../components/Navigation/MeghaMenuBootstrap4';
import RouteLanding from '../BootstrapFour/B4Components/B4LandingPage/RouteLanding';
import MusicZero from '../BootstrapFour/Websites/MusicZero/MusicZero';
import Photography from '../BootstrapFour/Websites/Photography/Photography';
import ProfileAaa from '../BootstrapFour/Websites/Profile_Aaa/PofileAaa';
import ProfileAab from '../BootstrapFour/Websites/Profile_Aab/ProfileAab';

/** BootstrapFour Components */
import Slides from '../BootstrapFour/Slides/Slides';
import Forms from '../BootstrapFour/Forms/Forms';
import Columns from '../BootstrapFour/Columns/Columns';
import Boxes from '../BootstrapFour/Boxes/Boxes';
import Navigations from '../BootstrapFour/Navigations/Navigations';
import Blogs from '../BootstrapFour/Blogs/Blogs';
import Shops from '../BootstrapFour/Shops/Shops';




export default function RouterBootstrapFour() {

  const [btnShowHide] = useState(true);

  return (
    <>

      <Route path="/websites-bootstrap">
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={`App ${btnShowHide} ? 'show' : 'hide'`}>
            <MeghaMenuBootstrap4 />
          </div>
          <div>
            <BootsrapFour />
          </div>
        </div>
      </Route>

      {/** BOOTSTRAP 4 COMPONENTS ****************************/}

      {/** SLIDES */}
      <Slides />
      {/** FORMs */}
      <Forms />
      {/** COLUMNS */}
      <Columns />
      {/** BOXES */}
      <Boxes />
      {/** NAVIGATIONS */}
      <Navigations />
      {/** BLOGS */}
      <Blogs />
      {/** SHOPS */}
      <Shops />






      {/** LANDING PAGE */}
      <RouteLanding />
      {/** BOOTSTRAP 4 WEBSITES */}
      <BaseTheme />
      <Portfolio2020 />
      <MusicZero />
      <Photography />
      <ProfileAaa />
      <ProfileAab />












    </>
  )
}

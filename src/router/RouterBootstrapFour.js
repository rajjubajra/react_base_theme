import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import BootsrapFour from '../BootstrapFour/BootstrapFour';

/** Bootstrap-Four Website Templates */
import BaseTheme from '../BootstrapFour/Websites/BaseTheme/Basetheme';

import ArtNdesign from '../BootstrapFour/Websites/ArtNdesign/ArtNdesign';
import Portfolio2020 from '../BootstrapFour/Websites/Portfolio2020/Portfolio2020';
import MeghaMenuBootstrap4 from '../components/Navigation/MeghaMenuBootstrap4';
import RouteLanding from '../BootstrapFour/B4Components/B4LandingPage/RouteLanding';

/** MUSIC */
import MusicZero from '../BootstrapFour/Websites/00MusicZero/MusicZero';
import MusicOne from '../BootstrapFour/Websites/01MusicOne/MusicOne';
import MusicTwo from '../BootstrapFour/Websites/02MusicTwo/MusicTwo';
import MusicThree from '../BootstrapFour/Websites/03MusicThree/MusicThree';

/** BLOGS */
import BlogOne from '../BootstrapFour/Websites/Blog01/BlogOne';
import BlogTwo from '../BootstrapFour/Websites/Blog02/BlogTwo';
import BlogThree from '../BootstrapFour/Websites/Blog03/BlogThree';
import BlogFour from '../BootstrapFour/Websites/Blog04/BlogFour';

/** BUSINESS [LOCAL BUSINESS AND PROFESSIONAL SERVICES] */
import BusinessOne from '../BootstrapFour/Websites/Business01/BusinessOne';
import BusinessTwo from '../BootstrapFour/Websites/Business02/BusinessTwo';
import BusinessThree from '../BootstrapFour/Websites/Business03/BusinessThree';
import BusinessFour from '../BootstrapFour/Websites/Business04/BusinessFour';

/** PROFILE SITES */
import YelloWebsiteZero from '../BootstrapFour/Websites/00YellowWebsiteZero/YellowWebsiteZero';

/** BAKERY */
import BakeryOne from '../BootstrapFour/Websites/Bakery01/BakeryOne';


import PhotographyOne from '../BootstrapFour/Websites/Photography01/PhotographyOne';
import PhotographyA from '../BootstrapFour/Websites/PhotographyA/PhotographyA';
import ProfileAaa from '../BootstrapFour/Websites/Profile_Aaa/PofileAaa';
import ProfileAab from '../BootstrapFour/Websites/Profile_Aab/ProfileAab';


/** Bootstrap-Four Components */
import Slides from '../BootstrapFour/Slides/Slides';
import Forms from '../BootstrapFour/Forms/Forms';
import Columns from '../BootstrapFour/Columns/Columns';
import Boxes from '../BootstrapFour/Boxes/Boxes';
import Navigations from '../BootstrapFour/Navigations/Navigations';
import Blogs from '../BootstrapFour/Blogs/Blogs';
import Shops from '../BootstrapFour/Shops/Shops';
import Footers from '../BootstrapFour/Footers/Footers';
import Templates from '../BootstrapFour/Templates/Templates';
import PhotoGallery from '../BootstrapFour/Websites/PhotoGallery/PhotoGallery';
//import ComingSoonZero from '../BootstrapFour/Websites/00ComingSoonZero/ComingSoonZero';




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
      {/** FOOTERS */}
      <Footers />
      {/** BLOGS */}
      <Blogs />
      {/** SHOPS */}
      <Shops />
      {/** TEMPLATES */}
      <Templates />





      {/** LANDING PAGE */}
      <RouteLanding /> {/** B4Components/B4LandingPage/ */}
      {/** BOOTSTRAP 4 WEBSITES */}
      <YelloWebsiteZero />
      <BaseTheme />
      <ArtNdesign />
      <Portfolio2020 />
      <MusicZero />
      <MusicOne />
      <MusicTwo />
      <MusicThree />
      <BlogOne />
      <BlogTwo />
      <BlogThree />
      <BlogFour />
      <BusinessOne />
      <BusinessTwo />
      <BusinessThree />
      <BusinessFour />

      <BakeryOne />
      <PhotoGallery />
      <PhotographyOne />
      <ProfileAaa />
      <ProfileAab />
      <PhotographyA />












    </>
  )
}

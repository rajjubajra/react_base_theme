import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';
import NavIconThreeLines from './NavIconThreeLines';
import { pagelink } from '../../../PageLink';


const data = [
  {
    id: "1",
    name: "Home",
    link: pagelink.home
  },
  {
    id: 2,
    name: "About",
    link: pagelink.about
  },
  {
    id: 3,
    name: "Gallery",
    link: pagelink.gallery
  },
  {
    id: 4,
    name: "Album",
    link: pagelink.album
  },
  {
    id: 5,
    name: "News",
    link: pagelink.news
  },
  {
    id: 6,
    name: "Contact",
    link: pagelink.contact
  },
  {
    id: 7,
    name: "Back",
    link: pagelink.back
  },

]

export const NavigationOne = () => {

  /** Window Breakpoint for mobile and tablet display */
  const mobileBreakPoint = 768;

  /** state "true" if browser size is less than "mobileBreakPoint" */
  const [windowSizeSmall, setWindowSizeSmall] = useState('');

  /** OnClick "Mobile Menu Icon[Three-lines], Veiw mobile menu" */
  const [view, setView] = useState(false);

  /** Runs Onload */
  useEffect(() => {
    console.log(window.innerWidth)
    window.innerWidth <= mobileBreakPoint
      ? setWindowSizeSmall(true)
      : setWindowSizeSmall(false);
  }, [])

  /** Runs while resize */
  useEffect(() => {
    window.onresize = function () {
      console.log(window.innerWidth)
      window.innerWidth <= mobileBreakPoint
        ? setWindowSizeSmall(true)
        : setWindowSizeSmall(false);
    }
  })

  return (
    <div>
      {/** ICON FOR TABLET AND MOBILE */}
      <div
        className={`${windowSizeSmall ? '' : 'd-none'}`}
        onClick={() => view ? setView(false) : setView(true)}
      >
        <NavIconThreeLines />
      </div>

      {/** NAVIGATION MENU */}
      <div className="d-flex justify-content-center">
        {windowSizeSmall === ''
          ? ''
          : <Navigation
            data={data}
            windowSizeSmall={windowSizeSmall}
            view={view} />}
      </div>
    </div >
  )
}

export default NavigationOne;

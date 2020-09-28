import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';
import NavIconThreeLines from './NavIconThreeLines';
import { pagelink } from '../../../PageLink';


const data = [
  {
    id: "1",
    name: "N1",
    link: pagelink.one
  },
  {
    id: 2,
    name: "N2",
    link: pagelink.two
  },
  {
    id: 3,
    name: "N3",
    link: pagelink.three
  },
  {
    id: 4,
    name: "N4",
    link: pagelink.four
  },
  {
    id: 5,
    name: "N5",
    link: pagelink.five
  },
  {
    id: 6,
    name: "N6",
    link: pagelink.six
  },
  {
    id: 7,
    name: "Back",
    link: pagelink.pages
  },

]

export const NavigationHeader = () => {

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
      <div className="container">
        {/** ICON FOR TABLET AND MOBILE */}
        <div
          className={`${windowSizeSmall ? '' : 'd-none'}`}
          onClick={() => view ? setView(false) : setView(true)}
        >
          <NavIconThreeLines />
        </div>

        {/** NAVIGATION MENU */}
        <div>
          {windowSizeSmall === ''
            ? ''
            : <Navigation data={data} windowSizeSmall={windowSizeSmall} view={view} />}
        </div>
      </div>
    </div>
  )
}

export default NavigationHeader;

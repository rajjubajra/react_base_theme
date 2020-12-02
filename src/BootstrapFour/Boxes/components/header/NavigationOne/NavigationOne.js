import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';
import NavIconThreeLines from './NavIconThreeLines';
import { pagelink } from '../../../PageLink';


const data = [
  {
    id: "1",
    name: "B1",
    link: pagelink.one
  },
  {
    id: 2,
    name: "B2",
    link: pagelink.two
  },
  {
    id: 3,
    name: "B3",
    link: pagelink.three
  },
  {
    id: 4,
    name: "B4",
    link: pagelink.four
  },
  {
    id: 5,
    name: "B5",
    link: pagelink.five
  },
  {
    id: 6,
    name: "B6",
    link: pagelink.six
  },
  {
    id: 7,
    name: "B7",
    link: pagelink.seven
  },
  {
    id: 8,
    name: "B8",
    link: pagelink.eight
  },
  {
    id: 9,
    name: "B9",
    link: pagelink.nine
  },
  {
    id: 10,
    name: "B10",
    link: pagelink.ten
  },
  {
    id: 10,
    name: "Back",
    link: pagelink.pages
  }
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

      <div className="container mb-5">
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
    </div >
  )
}

export default NavigationOne;

import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
import NavIconThreeLines from './NavIconThreeLines';
import NavMobile from './NavMobile';


const data = [
  {
    id: "1",
    name: "Link 1",
    link: "link-1"
  },
  {
    id: 2,
    name: "Link 2",
    link: "link-2"
  },
  {
    id: 3,
    name: "Link 3",
    link: "link-3"
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
    </div >
  )
}

export default NavigationOne;

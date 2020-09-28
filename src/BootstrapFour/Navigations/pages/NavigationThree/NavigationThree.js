import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cssclass } from '../../CssClass';
import TitleNNav from '../../../B4Components/B4Header/TitleNNav';
import axios from 'axios';
import NavIconThreeLines from './NavIconThreeLines/NavIconThreeLines';
import Navigation from './Navigation';
import { actionFetchMenuThree } from './Redux/actionFetchMenuThree';
import { Link } from 'react-router-dom';


export const NavigationThree = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchMenuThree())
  }, [dispatch])


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


  /** Runs while resizing */
  useEffect(() => {
    window.onresize = function () {
      console.log(window.innerWidth)
      window.innerWidth <= mobileBreakPoint
        ? setWindowSizeSmall(true)
        : setWindowSizeSmall(false);
    }
  })


  return (
    <div className={cssclass.base_classname}>
      <TitleNNav title={'Navigation 3'} href="/b4navigations" />

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
            : <Navigation
              windowSizeSmall={windowSizeSmall}
              view={view} />
          }
        </div>

        <div className="row mt-5">
          <div className="col"><h1>Navigation 3</h1></div>
        </div>
      </div>
    </div>
  )

}

export default NavigationThree;

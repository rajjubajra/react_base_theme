import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cssclass } from '../../CssClass';
import TitleNNav from '../../../B4Components/B4Header/TitleNNav';
import Navigation from './Navigation';
import { actionFetchMenuFour } from './Redux/actionFetchMenuFour';
import { actionFetchUserMenuFour } from './Redux/actionFetchUserMenuFour';


export const NavigationFour = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchMenuFour());
    dispatch(actionFetchUserMenuFour());
  }, [dispatch])


  /** Window Breakpoint for mobile and tablet display */
  const mobileBreakPoint = 968;

  /** state "true" if browser size is less than "mobileBreakPoint" */
  const [windowSizeSmall, setWindowSizeSmall] = useState('');

  /** OnClick "Mobile Menu Icon[Three-lines], Veiw mobile menu" */
  //const [view, setView] = useState(false);


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

      <TitleNNav title={'Navigation 4'} href="/b4navigations" />

      {/** NAVIGATION MENU */}
      <div>
        {windowSizeSmall === ''
          ? ''
          : <Navigation
            windowSizeSmall={windowSizeSmall}
          />
        }
      </div>

      <div className="row mt-5">
        <div className="col"><h1>Navigation 4</h1></div>
      </div>

    </div>
  )

}

export default NavigationFour;

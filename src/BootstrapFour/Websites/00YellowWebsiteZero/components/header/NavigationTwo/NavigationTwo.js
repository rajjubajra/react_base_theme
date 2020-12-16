import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../NavigationTwo/Navigation';
import NavIconThreeLines from './NavIconThreeLines';
import { MainMenuShowHide } from './Redux/ActionShowHide';

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
    name: "Contact",
    link: pagelink.contact
  }
]

export const NavigationTwo = (setViewHide) => {
  //const [view, setView] = useState(true);
  const view = useSelector(state => state.reducerShowHide.view);
  const dispatch = useDispatch();



  return (
    <div>
      <div className='container-fluid'>
        {/** navigation icon */}
        <div style={{ display: "block", zIndex: "10", position: "sticky" }}
          //onClick={() => view ? setView(false) : setView(true)}
          onClick={() => dispatch(MainMenuShowHide())}
        >
          <NavIconThreeLines />
        </div>
        <div style={{
          position: "relative",
          transitionProperty: "margin",
          transitionDuration: "3s",
          marginTop: view ? 0 : -1000,
          width: "100%",
          height: view ? "90vh" : "90vh",
          justifyContent: "center",
          display: "flex",
          background: "#eee",
          zIndex: "-1"
        }}>
          <Navigation data={data} />

        </div>
        <div className='row'>
          <div className="col" style={{ display: "none" }}>Navigation</div>
        </div>
      </div>
    </div>
  )
}
export default NavigationTwo;
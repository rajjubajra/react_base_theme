import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavHeader from '../NavHeader/NavHeader';
import FormSeven from './FormSeven';
import MainMenu from './MainMenu';


const headerStyle = {
  position: "sticky",
  top: 0
}



function Navtigation() {




  /** SEARCH MENU */
  const openSearch = useSelector(state => state.reducerOpenMeghaMenu.openSearch);



  const styleSearch = {
    position: 'relative',
    marginTop: openSearch ? 0 : "-2000px",
    marginBottom: "190px",
    transition: "margin 0.4s linear",
    zIndex: "-10"
  }


  return (
    <>
      <div style={headerStyle} className="container-fluid">
        <NavHeader />
        <MainMenu />
        <FormSeven />
      </div>

    </>
  )
}

export default Navtigation

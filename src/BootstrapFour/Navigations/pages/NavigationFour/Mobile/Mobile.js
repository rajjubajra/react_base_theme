import React, { useState } from 'react';
import './Mobile.scss';
import { Link } from 'react-router-dom';
import Products from '../Components/Products';
import FormSeven from '../Components/FormSeven';
import Help from '../Components/Help';
import AboutUs from '../Components/AboutUs';
import IconClose from '../Components/IconClose';
import FormFour from '../Components/FormFour';

function Mobile(props) {

  const [viewNew, setViewNew] = useState(false);
  const [viewCollection, setViewCollection] = useState(false);
  const [viewSearch, setViewSearch] = useState(false);
  const [viewHelp, setViewHelp] = useState(false);
  const [viewLogin, setViewLogin] = useState(false);
  const [viewAbout, setViewAbout] = useState(false);
  /** view Menu OR Content */
  const [viewMenu, setViewMenu] = useState(true);



  function showHideMenu() {
    setViewHelp(false);
    setViewLogin(false);
    setViewCollection(false);
    setViewNew(false);
    setViewSearch(false);
    setViewAbout(false);
    setViewMenu(true);
  }

  function showHide(uri) {
    if (uri === 'base:help') {
      setViewHelp(true);
      setViewLogin(false);
      setViewCollection(false);
      setViewNew(false);
      setViewSearch(false);
      setViewAbout(false);
      setViewMenu(false);
    }
    if (uri === 'base:my-account') {
      setViewHelp(false);
      setViewLogin(true);
      setViewCollection(false);
      setViewNew(false);
      setViewSearch(false);
      setViewAbout(false);
      setViewMenu(false);
    }
    if (uri === 'base:collections') {
      setViewHelp(false);
      setViewLogin(false);
      setViewCollection(true);
      setViewNew(false);
      setViewSearch(false);
      setViewAbout(false);
      setViewMenu(false);
    }
    if (uri === 'base:about-us') {
      setViewHelp(false);
      setViewLogin(false);
      setViewCollection(false);
      setViewNew(false);
      setViewSearch(false);
      setViewAbout(true);
      setViewMenu(false);
    }
    if (uri === 'base:new-product') {
      setViewHelp(false);
      setViewLogin(false);
      setViewCollection(false);
      setViewNew(true);
      setViewSearch(false);
      setViewAbout(false);
      setViewMenu(false);
    }
    if (uri === 'search') {
      setViewHelp(false);
      setViewLogin(false);
      setViewCollection(false);
      setViewNew(false);
      setViewSearch(true);
      setViewAbout(false);
      setViewMenu(false);
    }
  }


  return (
    <div className="container mobile-menu">
      <div className="d-flex justify-content-end">
        <div onClick={() => showHideMenu()}><IconClose /></div>
      </div>
      {/** LOGO */}
      <div
        style={{ textAlign: "center" }}
        className="row">
        <div className="col">
          <Link to="#">
            <span className="logo">L.o.g.o</span>
          </Link>
        </div>
      </div>


      {/** MENU TOP */}
      <div
        style={{
          width: "100%",
          marginTop: "20%",
          textAlign: "center",
          display: viewMenu ? "block" : "none"
        }}
      >

        {
          props.menuLength > 0
            ? <>
              {
                props.menuLength > 0
                  ? props.menu.map(item => {
                    return <div
                      onClick={() => showHide(item.uri)}
                      key={item.key}>
                      <Link key={item.uri} to={`#`}>
                        {item.title}
                      </Link>
                    </div>
                  })
                  : 'Loading...'
              }

            </>
            : 'Loading...'
        }

      </div>

      {/** MENU BOTTOM */}
      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: "50px",
          display: viewMenu ? "block" : "none"
        }}
        className="row">
        <div
          style={{ textAlign: "center" }}
          className="col">
          {
            props.userMenuLength > 0
              ? props.usermenu.map(item => {
                return <div
                  onClick={() => showHide(item.uri)}
                  key={item.key}>
                  <Link to={`#`}>
                    {item.title}
                  </Link>
                </div>
              })
              : 'Loading...'
          }
        </div>
      </div>





      {/** Drop Contents */}
      <div className="row drop-content">
        <div className={`col-12 ${viewNew ? 'd-block' : 'd-none'}`}>
          <Products prd="new" />
        </div>
        <div className={`col-12 ${viewCollection ? 'd-block' : 'd-none'}`}>
          <Products prd="collection" />
        </div>
        <div className={`col-12 ${viewAbout ? 'd-block' : 'd-none'} mt-3`}>
          <AboutUs />
        </div>
        <div className={`col-12 ${viewSearch ? 'd-block' : 'd-none'} mobile-search`} >
          <FormSeven />
        </div>
        <div className={`col-12 ${viewLogin ? 'd-block' : 'd-none'} mt-1 mobile-login`} >
          <FormFour />
        </div>
        <div className={`col-12 ${viewHelp ? 'd-block' : 'd-none'}`} >
          <Help />
        </div>
      </div>






    </div >
  )
}
export default Mobile
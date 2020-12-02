import React, { useState } from 'react';
import './Desktop.scss';
import { Link } from 'react-router-dom';
import Products from '../Components/Products';
import FormSeven from '../Components/FormSeven';
import Help from '../Components/Help';
import AboutUs from '../Components/AboutUs';
import FormFour from '../Components/FormFour';
import IconClose from '../Components/IconClose';

function Desktop(props) {

  const [viewNew, setViewNew] = useState(false);
  const [viewCollection, setViewCollection] = useState(false);
  const [viewSearch, setViewSearch] = useState(false);
  const [viewHelp, setViewHelp] = useState(false);
  const [viewLogin, setViewLogin] = useState(false);
  const [viewAbout, setViewAbout] = useState(false);

  /** CSS ClassName */
  //const [animate, setAnimate] = useState('');

  console.log("Collection", viewCollection);

  function hideView(uri) {
    if (uri === 'base:help') {
      setViewHelp(false)
    }
    if (uri === 'base:my-account') {
      setViewLogin(false)
    }
  }

  function showHide(uri) {
    if (uri === 'base:help') {
      setViewHelp(true);
      setViewLogin(false);
      setViewCollection(false);
      setViewNew(false);
      setViewSearch(false);
      setViewAbout(false);
    }
    if (uri === 'base:my-account') {
      setViewHelp(false);
      setViewLogin(true);
      setViewCollection(false);
      setViewNew(false);
      setViewSearch(false);
      setViewAbout(false)
    }
    if (uri === 'base:collections') {
      setViewHelp(false);
      setViewLogin(false);
      setViewCollection(true);
      setViewNew(false);
      setViewSearch(false);
      setViewAbout(false)
    }
    if (uri === 'base:about-us') {
      setViewHelp(false);
      setViewLogin(false);
      setViewCollection(false);
      setViewNew(false);
      setViewSearch(false);
      setViewAbout(true)
    }
    if (uri === 'base:new-product') {
      setViewHelp(false);
      setViewLogin(false);
      setViewCollection(false);
      setViewNew(true);
      setViewSearch(false);
      setViewAbout(false)
    }
    if (uri === 'search') {
      setViewHelp(false);
      setViewLogin(false);
      setViewCollection(false);
      setViewNew(false);
      setViewSearch(true);
      setViewAbout(false)
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="nav menu-four">
            <div className="nav-item">
              <Link to="#" className="nav-link">
                <span className="logo">L.o.g.o</span>
              </Link>
            </div>
            {
              props.menuLength > 0
                ? <>
                  {
                    props.menuLength > 0
                      ? props.menu.map(item => {
                        return <div
                          onMouseEnter={() => showHide(item.uri)}
                          className="nav-item" key={item.key}>
                          <Link className="nav-link" key={item.uri} to={`#`}>
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
        </div>

        <div className="col">
          <div className="nav menu-user">
            {
              props.userMenuLength > 0
                ? props.usermenu.map(item => {
                  return <div
                    onClick={() => showHide(item.uri)}
                    className="nav-item" key={item.key}>
                    <Link className="nav-link" to={`#`}>
                      {item.title}
                    </Link>
                  </div>
                })
                : 'Loading...'
            }
          </div>
        </div>

      </div>

      <div className="row animate-desktop">
        <div
          onMouseLeave={() => setViewNew(false)}
          className={`col-12 ${viewNew ? 'd-block' : 'd-none'}`}>
          <Products prd="new" />
        </div>
        <div
          onMouseLeave={() => setViewCollection(false)}
          className={`col-12 ${viewCollection ? 'd-block' : 'd-none'}`}>
          <Products prd="collection" />
        </div>
        <div
          onMouseLeave={() => setViewAbout(false)}
          className={`col-12 ${viewAbout ? 'd-block' : 'd-none'}`}>
          <AboutUs />
        </div>
        <div
          onMouseLeave={() => setViewSearch(false)}
          className={`col-12 ${viewSearch ? 'd-block' : 'd-none'} desktop-search`} >
          <FormSeven />
        </div>
        <div className={`col-12 ${viewLogin ? 'd-block' : 'd-none'} mt-5 desktop-login`} >
          <div className="d-flex justify-content-end"
            onClick={() => setViewLogin(false)}><IconClose /></div>
          <FormFour />
        </div>
        <div className={`col-12 ${viewHelp ? 'd-block' : 'd-none'}`} >
          <Help hideView={hideView} />
        </div>
      </div>

    </div>
  )
}

export default Desktop

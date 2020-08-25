import React, { useState } from 'react'
import './SideNav.scss';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';
import NavIconThreeLines from '../NavIcon/NavIconThreeLines';



function SideNav() {

  const [showHide, setShowHide] = useState(false)

  return (
    <>
      <div
        style={{ position: "fixed", top: "0px", zIndex: "1000" }}
        onClick={() => showHide ? setShowHide(false) : setShowHide(true)}
      >
        <NavIconThreeLines />
      </div>
      <div className={`side-nav ${showHide ? '' : 'd-none'}`}>
        <ul>
          <li><Link to={`${pagelink.home}`}>Home</Link></li>
          <li><Link to={`${pagelink.about}`}>About</Link></li>
          <li><Link to={`${pagelink.contact}`}>Contact</Link></li>
          <li><Link to="#">FAQ</Link></li>
          <li><Link to="#">Features</Link></li>
          <li><Link to="#">About us</Link></li>
          <li><Link to="#">Gallery</Link></li>
          <li><Link to="#">Help</Link></li>
          <li><Link to="#">Our Team</Link></li>
          <li><Link to="#">News</Link></li>
          <li><Link to="#">Error 404</Link></li>
          <li><Link to="#">Pricing</Link></li>
          <li><Link to="#">Under Construction</Link></li>
          <li><Link to="#">Comming Soon</Link></li>
          <li><Link to="#">Blank Page</Link></li>
          <li><Link to={`${pagelink.pages}`}>Templates</Link></li>
        </ul>
      </div>
    </>
  )
}

export default SideNav

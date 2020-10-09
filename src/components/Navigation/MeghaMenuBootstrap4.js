import React from 'react'
import { Link } from 'react-router-dom';


const MeghaMenuBootstrap4 = () => {


  return (

    <div className="dropDownNav" >
      <div>
        <ul className="list">
          <li className="submenu">
            <Link to="#">Websites</Link>
            <div className="submenu">
              <ul className="submenu-lists">
                <li>
                  <Link to="/websites">
                    Websites [Custom CSS]</Link>
                </li>
                <li>
                  <Link to="/websites-bootstrap">
                    Websites [Bootstrap 4]</Link>
                </li>
                <li>
                  <Link to="/applications">
                    Web Applications</Link>
                </li>
                <li>
                  <Link to="/ecommerce">
                    Ecommerce Sites</Link>
                </li>
              </ul>
            </div>
          </li>

          <li><Link to="/b4slides">Slides</Link></li>
          <li><Link to="/b4forms">Form</Link></li>
          <li><Link to="/b4columns">Columns</Link></li>

          <li><Link to="/b4templates">Templates</Link></li>
          <li><Link to="/b4boxes">Boxes</Link></li>
          <li><Link to="/b4navigations">Navigation</Link></li>
          <li><Link to="/b4footers">Footers</Link></li>
          <li><Link to="/b4blogs">Blogs</Link></li>
          <li><Link to="/b4shops">Shops</Link></li>
          <li><Link to="#">Apps</Link></li>

          <li className="submenu">
            <Link to="#">Misc</Link>
            <div className="submenu">
              <ul className="submenu-lists" >
                <h4>Boxes</h4>
                <li><Link to="#">Columns</Link></li>
                <li><Link to="#">Box</Link></li>
                <li><Link to="#">Article</Link></li>
                <li><Link to="#">Zoom</Link></li>
                <li><Link to="#">Trailer</Link></li>
                <li><Link to="#">Story</Link></li>
                <li><Link to="#">Slidding</Link></li>
                <li><Link to="#">Quick Fact</Link></li>
                <li><Link to="#">Promo</Link></li>
                <li><Link to="#">Pricing</Link></li>
                <li><Link to="#">Photo</Link></li>
                <li><Link to="#">Quick Fact</Link></li>
                <li><Link to="#">Icon</Link></li>
                <li><Link to="#">Hover</Link></li>
                <li><Link to="#">Quick Fact</Link></li>
                <li><Link to="#">Features</Link></li>
                <li><Link to="#">Counter</Link></li>
                <li><Link to="#">Countdown</Link></li>
                <li><Link to="#">Chart</Link></li>
                <li><Link to="#">Before After Effect</Link></li>
                <li><Link to="#">Quick Fact</Link></li>
              </ul>
              <ul className="submenu-lists" >
                <h4>Small Blocks</h4>
                <li><Link to="#">Alert</Link></li>
                <li><Link to="#">Typography</Link></li>
                <li><Link to="#">Icons</Link></li>
                <li><Link to="#">Buttons</Link></li>
                <li><Link to="#">Social Media</Link></li>
                <li><Link to="#">List and Bullets</Link></li>
              </ul>
              <ul className="submenu-lists" >
                <h4>Contents</h4>
                <li><Link to="#">Navigations</Link></li>
                <li><Link to="#">Headers</Link></li>
                <li><Link to="#">Footer</Link></li>
                <li><Link to="#">Accordion</Link></li>
                <li><Link to="#">Helper</Link></li>
                <li><Link to="#">List</Link></li>
                <li><Link to="#">Buttons</Link></li>
                <li><Link to="#">Social Media</Link></li>
                <li><Link to="#">List and Bullets</Link></li>
                <li><Link to="#">Timeline</Link></li>
                <li><Link to="#">Animation</Link></li>
                <li><Link to="#">Image Slider</Link></li>
              </ul>
            </div>
          </li>



        </ul>
      </div>
    </div>
  )
}

export default MeghaMenuBootstrap4

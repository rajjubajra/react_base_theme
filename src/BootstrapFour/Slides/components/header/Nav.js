import React from 'react'
import './Nav.scss';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';


function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to={`${pagelink.one}`}>S1</Link></li>
        <li><Link to={`${pagelink.two}`}>S2</Link></li>
        <li><Link to={`${pagelink.three}`}>S3</Link></li>
        <li><Link to={`${pagelink.pages}`}>Slides</Link></li>
      </ul>
    </nav>
  )
}

export default Nav

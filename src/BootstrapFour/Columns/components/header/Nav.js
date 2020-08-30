import React from 'react'
import './Nav.scss';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';


function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to={`${pagelink.one}`}>C1</Link></li>
        <li><Link to={`${pagelink.two}`}>C2</Link></li>
        <li><Link to={`${pagelink.three}`}>C3</Link></li>
        <li><Link to={`${pagelink.page}`}>Back</Link></li>
      </ul>
    </nav>
  )
}

export default Nav

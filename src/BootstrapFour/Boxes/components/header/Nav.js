import React from 'react'
import './Nav.scss';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';


function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to={`${pagelink.one}`}>B-1</Link></li>
        <li><Link to={`${pagelink.two}`}>B-2</Link></li>
        <li><Link to={`${pagelink.three}`}>B-3</Link></li>
        <li><Link to={`${pagelink.four}`}>B-4</Link></li>
        <li><Link to={`${pagelink.five}`}>B-5</Link></li>
        <li><Link to={`${pagelink.pages}`}>Back</Link></li>
      </ul>
    </nav>
  )
}

export default Nav

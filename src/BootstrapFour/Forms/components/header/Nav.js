import React from 'react'
import './Nav.scss';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';


function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to={`${pagelink.one}`}>F1</Link></li>
        <li><Link to={`${pagelink.two}`}>F2</Link></li>
        <li><Link to={`${pagelink.three}`}>F3</Link></li>
        <li><Link to={`${pagelink.four}`}>F4</Link></li>
        <li><Link to={`${pagelink.five}`}>F5</Link></li>
        <li><Link to={`${pagelink.six}`}>F6</Link></li>
        <li><Link to={`${pagelink.seven}`}>F7</Link></li>
        <li><Link to={`${pagelink.eight}`}>F8</Link></li>
        <li><Link to={`${pagelink.nine}`}>F9</Link></li>
        <li><Link to={`${pagelink.pages}`}>Back</Link></li>
      </ul>
    </nav>
  )
}

export default Nav

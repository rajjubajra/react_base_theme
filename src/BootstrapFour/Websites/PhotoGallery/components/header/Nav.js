import React from 'react'
import './Nav.scss';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';


function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to={`/${pagelink.home}`}>Home</Link></li>
        <li><Link to={`/${pagelink.gallery}/15`}>Tv</Link></li>
        <li><Link to={`/${pagelink.gallery}/16`}>Fd</Link></li>
        <li><Link to={`/${pagelink.gallery}/17`}>Mc</Link></li>
        <li><Link to={`/${pagelink.gallery}/18`}>Gn</Link></li>
        <li><Link to={`/${pagelink.gallery}/19`}>Sm</Link></li>
        <li><Link to={`/${pagelink.gallery}/20`}>Sm-svg</Link></li>
        <li><Link to={`/${pagelink.gallery}/21`}>Ic-svg</Link></li>
        <li><Link to={`/${pagelink.gallery}/33`}>Tb</Link></li>
        <li><Link to={`/${pagelink.gallery}/34`}>Lg</Link></li>
        <li><Link to={`/${pagelink.back}`}>Back</Link></li>
      </ul>
    </nav>
  )
}

export default Nav

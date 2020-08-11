import React from 'react'
import { Link } from 'react-router-dom'
import { pagelink } from '../../PageLink'




function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to={`${pagelink.home}`}>Home</Link></li>
        <li><Link to={`${pagelink.work}`}>Work</Link></li>
        <li><Link to={`${pagelink.project}`}>Project</Link></li>
        <li><Link to={`${pagelink.contact}`}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav

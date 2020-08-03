import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/basetheme">Home</Link></li>
        <li><Link to="basetheme-about">About</Link></li>
        <li><Link to="basetheme-contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav

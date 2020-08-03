import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/profile-aaa">Home</Link></li>
        <li><Link to="profile-aaa-about">About</Link></li>
        <li><Link to="profile-aaa-contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav

import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Test</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/test">Page One</Link>
          <Link className="nav-item nav-link/" to="/test-page-two/12">Page Two</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header

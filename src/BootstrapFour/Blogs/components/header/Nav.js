import React, { useEffect, useState } from 'react'
import './Nav.scss';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';


function Nav() {
  const [mouseScroll, SetMouseScroll] = useState(false);

  useEffect(() => {

  })


  return (
    <nav>
      <ul>
        <li><Link to={`/${pagelink.one}`}>B1</Link></li>
        <li><Link to={`/${pagelink.two}`}>B2</Link></li>
        <li><Link to={`/${pagelink.three}`}>B3</Link></li>
        <li><Link to={`/${pagelink.four}`}>B4</Link></li>
        <li><Link to={`/${pagelink.pages}`}>Blogs</Link></li>
      </ul>
    </nav>
  )
}
export default Nav
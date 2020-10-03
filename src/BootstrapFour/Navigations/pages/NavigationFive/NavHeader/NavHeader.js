import React from 'react';
import NavIconThreeLines from './NavIconThreeLines';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionOpenMeghaMenu, actionOpenSearch } from '../Redux/actionOpenMeghaMenu';



function NavHeader() {
  const dispatch = useDispatch();

  return (

    <div className="row">
      <div className="col">
        <span onClick={() => dispatch(actionOpenMeghaMenu())}>
          <NavIconThreeLines />
        </span>
      </div>
      <div className="col">
        <h1>Magazine Menu</h1>
      </div>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="#">Magazine</Link>
          </li>
          <li>
            <span onClick={() => dispatch(actionOpenSearch())}>
              <Link className="nav-link" to="#">Search</Link>
            </span>
          </li>
        </ul>
      </div>
    </div>


  )
}

export default NavHeader

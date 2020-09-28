import React from 'react';
import { Link } from 'react-router-dom';

function NavDesktop(props) {
  return (
    <div>
      <div
        className={`nav ${props.windowSizeSmall ? 'd-none' : ''}`}>
        {
          props.data.map(item => {
            return <div className="nav-item" key={item.id}>
              <Link className="nav-link" to={`/${item.link}`} >{item.name}</Link>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default NavDesktop

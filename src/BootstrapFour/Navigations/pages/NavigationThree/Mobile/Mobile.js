import React from 'react';
import './Mobile.scss';
import { Link } from 'react-router-dom';

function Mobile(props) {

  return (
    <div className="container">
      <div className="row">
        <div className="nav menu-three">

          {
            props.menuLength > 0
              ? props.menu.map(item => {
                return <div className='col-6' key={item.key}>
                  <div className="nav-item">
                    <Link className="nav-link" to={`/${item.uri}`}>
                      <h3>{item.title}</h3>
                      <p className="small-font">{item.description}</p>
                    </Link>
                  </div>
                </div>
              })
              : 'Loading...'
          }
        </div>
      </div>
    </div>
  )
}

export default Mobile

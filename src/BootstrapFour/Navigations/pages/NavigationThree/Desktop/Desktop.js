import React from 'react';
import './Desktop.scss';
import { Link } from 'react-router-dom';

function Desktop(props) {

  return (
    <div className="container">
      <div className="row">
        <div className="nav menu-three">
          <div className="col">
            <div className="logo">
              <span>[Logo]</span>
            </div>

          </div>
          {
            props.menuLength > 0
              ? props.menu.map(item => {
                return <div className="col" key={item.key}>
                  <div className="nav-item">
                    <Link className="nav-link" to={`/${item.uri}`}>
                      <h5>{item.title}</h5>
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

export default Desktop

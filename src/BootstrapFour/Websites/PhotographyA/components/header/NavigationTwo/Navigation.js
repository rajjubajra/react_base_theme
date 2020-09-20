import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className="nav justify-content-center flex-column" >
      {
        props.data.map(item => {
          return <div className="nav-item">
            <Link className="nav-link" to={item.link}>{item.name}</Link>
          </div>
        })
      }
    </div>
  )
}
export default Navigation
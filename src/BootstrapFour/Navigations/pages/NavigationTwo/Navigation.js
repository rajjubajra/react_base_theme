import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className="nav justify-content-center flex-column" >
      {
        props.data.map(item => {
          return <ul className="Item">
            <li><Link to={item.link}>{item.name}</Link></li>
          </ul>
        })
      }
    </div>
  )
}
export default Navigation
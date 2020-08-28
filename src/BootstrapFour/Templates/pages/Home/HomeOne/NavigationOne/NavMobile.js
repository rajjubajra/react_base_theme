import React from 'react';
import { Link } from 'react-router-dom';

/** Tablet and Mobile */

const ulStyle = {
  listStyle: "none"
}

function NavMobile(props) {
  return (
    <div style={{
      /** some reason transition duration not working  */
      position: "absolute",
      transitionProperty: "top",
      transitionDuration: "2s",
      top: props.view ? 43 : -200,
      background: "rgba(255,255,255,0.23)",
      width: "100%"
    }}>
      {/** view: true/false based on display size */}
      <ul style={ulStyle} className={`${props.view && props.windowSizeSmall ? 'flex-column' : 'd-none'}`}>
        {
          props.data.map(item => {
            return <li key={item.id}>
              <Link
                style={props.linkStyle}
                to={item.link}
              >
                {item.name}
              </Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default NavMobile

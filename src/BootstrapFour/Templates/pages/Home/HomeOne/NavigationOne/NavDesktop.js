import React from 'react'
import { Link } from 'react-router-dom';


const ulStyle = {
  listStyle: "none",
  display: "flex",
  height: "40px",
  alignItems: "center"
}

function NavDesktop(props) {
  return (
    <div>
      <ul
        style={ulStyle}
        className={`${props.windowSizeSmall ? 'd-none' : ''}`}>
        {
          props.data.map(item => {
            return <li key={item.id}>
              <Link
                style={props.linkStyle}
                to={item.link}
                eventKey={item.link}>{item.name}</Link>
            </li>
          })
        }
      </ul>
    </div>

  )
}

export default NavDesktop

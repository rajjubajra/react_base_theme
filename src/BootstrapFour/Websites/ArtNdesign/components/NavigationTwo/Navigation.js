import React from 'react';


/**
 * 
 * http://localhost:3000/artNdesign#contact
 * http://localhost:3000/artNdesign#contact
 */

const navListStye = {
  listStyel: "none"
}

function Navigation(props) {
  return (
    <div className="nav justify-content-center flex-column" >
      <ul className="nav">
        {
          props.data.map((item, index) => {
            return <li className="nav-item">
              <a className="nav-link" href={`${item.link}`}>{item.name}</a>
            </li>
          })
        }
      </ul>
    </div>
  )
}
export default Navigation

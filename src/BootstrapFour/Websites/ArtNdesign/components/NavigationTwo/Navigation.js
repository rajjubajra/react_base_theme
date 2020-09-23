import React from 'react';


/**
 * 
 * http://localhost:3000/artNdesign#contact
 * http://localhost:3000/artNdesign#contact
 */

function Navigation(props) {
  return (
    <div className="nav justify-content-center flex-column" >
      {
        props.data.map((item, index) => {
          return <ul className="Item" key={index}>
            <li><a href={`${item.link}`}>{item.name}</a></li>
          </ul>
        })
      }
    </div>
  )
}
export default Navigation

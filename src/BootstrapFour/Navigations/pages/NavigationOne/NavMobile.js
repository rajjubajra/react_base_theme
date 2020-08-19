import React from 'react';
import Nav from 'react-bootstrap/Nav';

/** Tablet and Mobile */

function NavMobile(props) {
  return (
    <div style={{
      /** some reason transition duration not working  */
      position: "relative",
      transitionProperty: "top",
      transitionDuration: "2s",
      top: props.view ? 0 : -200,
      background: "#eee"
    }}>
      <Nav className={`${props.view && props.windowSizeSmall ? 'flex-column' : 'd-none'}`}>
        {
          props.data.map(item => {
            return <Nav.Item key={item.id}>
              <Nav.Link eventKey={item.link}>{item.name}</Nav.Link>
            </Nav.Item>
          })
        }
      </Nav>
    </div>
  )
}

export default NavMobile

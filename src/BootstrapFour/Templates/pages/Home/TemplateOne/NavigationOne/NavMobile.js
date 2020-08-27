import React from 'react';
import Nav from 'react-bootstrap/Nav';

/** Tablet and Mobile */

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
      <Nav className={`${props.view && props.windowSizeSmall ? 'flex-column' : 'd-none'}`}>
        {
          props.data.map(item => {
            return <Nav.Item key={item.id}>
              <Nav.Link style={props.linkStyle} eventKey={item.link}>    {item.name}
              </Nav.Link>
            </Nav.Item>
          })
        }
      </Nav>
    </div>
  )
}

export default NavMobile

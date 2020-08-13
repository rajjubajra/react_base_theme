import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
  return (
    <>
      {/** Tablet and Mobile */}
      <Nav
        className={`${props.view && props.windowSizeSmall ? 'flex-column' : 'd-none'}`}>
        {
          props.data.map(item => {
            return <Nav.Item>
              <Nav.Link eventKey={item.link}>{item.name}</Nav.Link>
            </Nav.Item>
          })
        }
      </Nav>
      {/** disktop */}
      <Nav
        className={`${props.windowSizeSmall ? 'd-none' : ''}`}>
        {
          props.data.map(item => {
            return <Nav.Item>
              <Nav.Link eventKey={item.link}>{item.name}</Nav.Link>
            </Nav.Item>
          })
        }
      </Nav>
    </>
  )
}

export default Navigation

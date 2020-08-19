import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
  return (
    <Nav className="justify-content-center flex-column" >
      {
        props.data.map(item => {
          return <Nav.Item>
            <Nav.Link to={item.link}>{item.name}</Nav.Link>
          </Nav.Item>
        })
      }
    </Nav>
  )
}
export default Navigation
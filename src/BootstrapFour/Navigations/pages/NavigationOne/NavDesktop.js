import React from 'react'
import Nav from 'react-bootstrap/Nav';

function NavDesktop(props) {
  return (
    <div>
      <Nav
        className={`${props.windowSizeSmall ? 'd-none' : ''}`}>
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

export default NavDesktop

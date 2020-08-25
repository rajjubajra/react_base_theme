import React from 'react'
import { Navbar } from 'react-bootstrap';
import IconBackspace from '../../B4Icons/IconBackspace';

function TitleNNav(props) {
  return (
    <Navbar>
      <Navbar.Brand href="websites-bootstrap">
        <div style={{ display: "flex" }}>
          <h3 style={{ fontWeight: "300", letterSpacing: "0.2rem" }}>{props.title}</h3>
          <p style={{
            position: "relative",
            top: "15px",
            left: "15px",
            fontSize: "0.7rem",
            letterSpacing: "0.1rem"
          }}
          >{props.subtitle}</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <IconBackspace linkRef={props.href} />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default TitleNNav

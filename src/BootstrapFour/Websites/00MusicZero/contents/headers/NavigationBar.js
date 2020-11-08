import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';



function NavigationBar(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  //console.log('variant', variant);

  return (
    <Navbar className={props.css_class} collapseOnSelect expand="lg" bg={variant} variant={variant}>
      <Navbar.Brand href="#home">YW-Music-Theme</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/music-zero">Music</Nav.Link>
          <Nav.Link href="/music-zero-about">About</Nav.Link>
          <Nav.Link href="/music-zero-contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
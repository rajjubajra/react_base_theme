import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';



function NavigationBar(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  //console.log('variant', variant);

  return (
    <Navbar className={props.css_class} collapseOnSelect expand="lg" bg={variant} variant={variant}>
      <Navbar.Brand href="#home">YW-Template</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="profile_aaa">Home</Nav.Link>
          <Nav.Link href="profile-aaa-about">About</Nav.Link>
          <Nav.Link href="profile-aaa-contact">Services</Nav.Link>
          <Nav.Link href="profile-aaa-gallery">Gallery</Nav.Link>
          <Nav.Link href="profile-aaa-pages">Pages</Nav.Link>
          <Nav.Link href="profile-aaa-subscribe">Subscribe</Nav.Link>
          <Nav.Link href="profile-aaa-contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
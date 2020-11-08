import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { pagelink } from '../../PageLink';


function NavigationBar(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  //console.log('variant', variant);

  return (
    <div className={`${props.css_class} navbar navbar-expand-lg`} collapseOnSelect expand="lg" >
      <Navbar.Brand href="#home">YW-Music-Theme</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href={`/${pagelink.home}`}>Music</Nav.Link>
          <Nav.Link href={`/${pagelink.about}`}>About</Nav.Link>
          <Nav.Link href={`/${pagelink.contact}`}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  )
}
export default NavigationBar
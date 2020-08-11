import React from 'react'
import Nav from '../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import { CssClass } from '../CssGlobalClass';

function Services() {
  return (
    <div className={CssClass.rootClass}>
      <Nav />
      <Container>
        <Row>
          <Col><h1>Services</h1></Col>
        </Row>
      </Container>



    </div>
  )
}

export default Services

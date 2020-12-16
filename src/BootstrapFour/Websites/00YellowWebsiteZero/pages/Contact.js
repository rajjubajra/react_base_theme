import React from 'react'
import Nav from '../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';

export const Contact = () => {
  return (
    <div className='base-theme'>
      <Nav />
      <Container>
        <Row>
          <Col><h1>Contact</h1></Col>
        </Row>
      </Container>

    </div>
  )
}

export default Contact;

import React from 'react'
import Header from '../components/header/Header';
import { Container, Row, Col } from 'react-bootstrap'

export const Contact = () => {
  return (
    <div className='base-theme'>
      <Header />
      <Container>
        <Row>
          <Col><h1>Contact</h1></Col>
        </Row>
      </Container>

    </div>
  )
}

export default Contact;

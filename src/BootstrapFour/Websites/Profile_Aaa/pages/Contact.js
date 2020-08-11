import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import D8WebForm from '../components/form/D8WebForm';
import SocialMediaIcons from '../components/SocialMedia/SocialMediaIcons';

export const Contact = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col><h1>Contact</h1></Col>
          <D8WebForm />
          <SocialMediaIcons />
        </Row>
      </Container>
    </div>
  )
}

export default Contact;

import React from 'react'
import Header from '../components/header/Header';
import { Container, Row, Col } from 'react-bootstrap'

export const About = () => {
  return (
    <div className='base-theme'>
      <Header />
      <Container>
        <Row>
          <Col><h1>About</h1></Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;

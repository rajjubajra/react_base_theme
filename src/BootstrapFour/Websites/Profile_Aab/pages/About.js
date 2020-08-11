import React from 'react'
import Nav from '../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import { CssClass } from '../CssGlobalClass';

export const About = () => {
  return (
    <div className={CssClass.rootClass}>
      <Nav />
      <Container>
        <Row>
          <Col><h1>About</h1></Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;

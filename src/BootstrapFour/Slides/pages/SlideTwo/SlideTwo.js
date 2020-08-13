import React from 'react';
import Nav from '../../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import { cssclass } from '../../CssClass';

export const SlideTwo = () => {


  return (
    <div className={cssclass.base_classname}>
      <Nav />
      <Container>
        <Row>
          <Col><h1>Slide Two</h1></Col>
        </Row>
      </Container>
    </div>
  )
}
export default SlideTwo;

import React from 'react'
import Nav from '../../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';

import PhotoBox from './PhotoBox';


export const BoxTwo = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Row>
          <Col className="d-flex f-wrap" style={{ flexWrap: "wrap" }}>
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BoxTwo;

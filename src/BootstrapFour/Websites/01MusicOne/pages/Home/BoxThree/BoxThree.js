import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import PhotoBox from './PhotoBox';


export const BoxThree = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Container>
        <Row>
          <Col className="d-flex f-wrap justify-content-center" style={{ flexWrap: "wrap" }}>
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

export default BoxThree;

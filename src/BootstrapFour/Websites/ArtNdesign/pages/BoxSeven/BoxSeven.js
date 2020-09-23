import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PhotoBox from './PhotoBox';


export const BoxSeven = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="d-flex f-wrap" style={{ flexWrap: "wrap" }}>
            <PhotoBox />
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

export default BoxSeven;

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PhotoText from './PhotoText';
import TextPhoto from './TextPhoto';


export const BoxFour = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <Container>
        <Row>
          <Col>
            <section>
              <PhotoText />
            </section>
            <section>
              <TextPhoto />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BoxFour;

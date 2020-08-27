import React from 'react'
import { Container, Row } from 'react-bootstrap';

import PhotoText from './PhotoText';
import TextPhoto from './TextPhoto';

const styleLight = {
  width: "100%",
  height: "auto",
  margin: "20px 0px"
}
const styleDark = {
  width: "100%",
  height: "auto",
  margin: "20px 0px"
}

export const BoxFive = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>

      <Container>
        <Row>
          <section style={styleLight}>
            <PhotoText />
          </section>
          <section style={styleDark}>
            <PhotoText />
          </section>
        </Row>
      </Container>
    </div>
  )
}

export default BoxFive;

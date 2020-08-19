import React from 'react'
import Nav from '../../components/header/Nav';
import { Container, Row } from 'react-bootstrap';

import PhotoText from './PhotoText';
import TextPhoto from './TextPhoto';

const styleLight = {
  width: "100%",
  height: "auto",
  background: "#ddd",
  border: "1px solid #ccc",
  margin: "20px 0px"
}
const styleDark = {
  width: "100%",
  height: "auto",
  background: "#000",
  border: "1px solid #ccc",
  margin: "20px 0px"
}

export const BoxFive = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Nav />
      <Container>
        <Row>
          <section style={styleLight}>
            <PhotoText />
          </section>
          <section style={styleDark}>
            <PhotoText />
          </section>

          <section style={styleLight}>
            <TextPhoto />
          </section>
          <section style={styleDark}>
            <TextPhoto />
          </section>


        </Row>
      </Container>
    </div>
  )
}

export default BoxFive;

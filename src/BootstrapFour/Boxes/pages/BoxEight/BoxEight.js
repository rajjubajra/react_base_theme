import React from 'react'
import Nav from '../../components/header/Nav';
import { Container, Row } from 'react-bootstrap';
import Text from './Text';


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

export const BoxEight = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Nav />
      <Container>
        <Row>
          <section style={styleLight}>
            <Text />
          </section>
          <section style={styleDark}>
            <Text />
          </section>

          <section style={styleLight}>
            <Text />
          </section>
          <section style={styleDark}>
            <Text />
          </section>


        </Row>
      </Container>
    </div>
  )
}

export default BoxEight;

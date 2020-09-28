import React from 'react'
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
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
      <NavigationOne />

      <Container>
        <div className="row">
          <div className="col">
            <p className="small-font">[ Box - 8 ]</p>
          </div>
        </div>
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

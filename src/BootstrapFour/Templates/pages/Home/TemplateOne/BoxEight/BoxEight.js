import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Text from './Text';


const styleLight = {
  width: "100%",
  height: "auto",
  border: "0px solid #ccc",
  margin: "20px 0px"
}


export const BoxEight = () => {
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <Row>
          <section style={styleLight}>
            <Text />
          </section>
        </Row>
      </Container>
    </div>
  )
}

export default BoxEight;

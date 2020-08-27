import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Text from './Text';
import { useInView } from 'react-intersection-observer';


const styleLight = {
  width: "100%",
  height: "auto",
  border: "0px solid #ccc",
  margin: "20px 0px",
  opacity: "1",
  transition: "opacity 2s",
  transitionDelay: "1s"

}

const beforeView = {
  opacity: "0",
  transition: "opacity 1s"
}


export const BoxEight = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })


  return (
    <div style={{ width: "100%" }}>
      <Container ref={ref}>
        <Row>
          <section style={inView ? styleLight : beforeView}>
            <Text />
          </section>
        </Row>
      </Container>
    </div>
  )
}

export default BoxEight;

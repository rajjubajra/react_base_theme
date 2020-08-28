import React from 'react'
import Photo from './Photo';
import Text from './Text';
import { Container, Row, Col } from 'react-bootstrap';


const boxFour = {
  position: "relative"
}


function PhotoText() {


  return (
    <div style={boxFour}>
      <Container>
        <Row>
          <Col lg={6} >
            <Photo />
          </Col>
          <Col lg={6}>
            <Text />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PhotoText

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
          <Col>
            <Photo />
            <Text />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PhotoText

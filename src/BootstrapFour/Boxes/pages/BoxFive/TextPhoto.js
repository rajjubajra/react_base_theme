import React from 'react'
import Photo from './Photo';
import Text from './Text';
import { Container, Row, Col } from 'react-bootstrap';


const boxFour = {
  position: "relative"
}


function TextPhoto() {


  return (
    <div style={boxFour}>
      <Container>
        <Row>
          <Col>
            <Text />
            <Photo />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TextPhoto

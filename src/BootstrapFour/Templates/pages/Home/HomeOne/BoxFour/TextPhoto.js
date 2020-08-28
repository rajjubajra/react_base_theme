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
          <div className="col-lg-6">
            <Text />
          </div>
          <div className="col-lg-6">
            <Photo />
          </div>
        </Row>
      </Container>
    </div >
  )
}

export default TextPhoto

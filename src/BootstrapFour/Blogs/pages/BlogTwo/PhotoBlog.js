import React from 'react'
import Photo from './Photo';
import Text from './Text';
import { Container, Row, Col } from 'react-bootstrap';


const boxOne = {
  display: "block",
  maxWidth: "500px",
  minHeight: "400px",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
}


function PhotoBlog() {



  return (
    <div style={boxOne}>
      <Container>
        <Row>
          <Col lg={4}><Photo /></Col>
          <Col lg={8}><Text /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default PhotoBlog

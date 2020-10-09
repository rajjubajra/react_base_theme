import React from 'react'
import Photo from './Photo';
import Text from './Text';
import { Container, Row, Col } from 'react-bootstrap';


const boxOne = {
  display: "block",
  maxWidth: "980px",
  minHeight: "400px",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
}


function PhotoBlog(props) {



  return (
    <div style={boxOne}>
      <Container>
        <Row>
          <Col lg={4}><Photo /></Col>
          <Col lg={8}>
            <Text
              title={props.title}
              body={props.body}
              id={props.id}
            /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default PhotoBlog

import React from 'react'
import Nav from '../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import { cssclass } from '../CssClass';

export const BlogOne = () => {
  return (
    <div className={cssclass.base_classname}>
      <Nav />
      <Container>
        <Row>
          <Col><h1>Blog 1</h1></Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlogOne;

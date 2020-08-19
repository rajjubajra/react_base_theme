import React from 'react'
import Nav from '../../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';

import PhotoBlog from './PhotoBlog';


export const BlogFour = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Nav />
      <Container>
        <Row>
          <Col className="d-flex f-wrap" style={{ flexWrap: "wrap" }}>
            <PhotoBlog />
            <PhotoBlog />
            <PhotoBlog />
            <PhotoBlog />
            <PhotoBlog />
            <PhotoBlog />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlogFour;
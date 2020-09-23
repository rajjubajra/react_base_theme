import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const linkStyle = {
  display: "flex",
}


function SocialMedia() {
  return (
    <Container className="social-media">
      <Row className="justify-content-center">
        <Col lg={2} md={3} sm={6} xs={8} style={linkStyle}>
          <Link to="#">
            <img className="img-fluid"
              src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/drw-facebook.png"
              alt="icon"
            />
          </Link>
          <Link to="#">
            <img className="img-fluid"
              src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/drw-twitter.png"
              alt="icon"
            />
          </Link>
          <Link to="#">
            <img className="img-fluid"
              src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/drw-youtube.png"
              alt="icon"
            />
          </Link>
          <Link to="#">
            <img className="img-fluid"
              src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/drw-instagram.png"
              alt="icon"
            />
          </Link>
        </Col>
      </Row>
    </Container >
  )
}

export default SocialMedia

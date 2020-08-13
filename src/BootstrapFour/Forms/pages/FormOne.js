import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Nav from '../components/header/Nav'

/** D8WebForm */
function FormOne() {
  return (
    <Container>
      <Nav />
      <Row className="justify-content-center">
        <Col lg={9}><p>[form - 1]</p><h5>Contact Form</h5></Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={9}>
          <iframe src="//yellow-website.com/d8-react-base-theme-backend/webform/contact_form/share/iframe-resizer/4.2.10" title="Contact form | D8 React Base Theme Backend" className="webform-share-iframe" allow="geolocation; microphone; camera" allowtransparency="true" style={{ width: "1px", minWidth: "100%", height: "550px", border: "1px solid #ccc", padding: "50px" }}>
          </iframe>
        </Col>
      </Row>
    </Container >
  )
}

export default FormOne
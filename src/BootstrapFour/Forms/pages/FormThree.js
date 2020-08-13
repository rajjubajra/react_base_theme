import React from 'react'
import Nav from '../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import { cssclass } from '../CssClass';

export const FormThree = () => {
  return (
    <div className={cssclass.base_classname}>
      <Nav />
      <Container>
        <Row>
          <Col><h1>Form 3</h1></Col>
        </Row>
        <Row>
          <Col>
            <iframe src="//www.yellow-website.com/d8-react-base-theme-backend/webform/contact_form/share/iframe-resizer/4.2.10" title="Contact form | D8 React Base Theme Backend" class="webform-share-iframe" frameborder="0" allow="geolocation; microphone; camera" allowtransparency="true" allowfullscreen="true" style={{ width: "1px", minWidth: "100%" }}></iframe>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default FormThree;

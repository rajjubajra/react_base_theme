import React from 'react'
import Nav from '../../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import { cssclass } from '../../CssClass';
import SideNav from '../../components/SideNav/SideNav';


export const TemplateThree = () => {
  return (
    <div className={cssclass.base_classname}>
      <Nav />
      <SideNav />
      <Container>
        <Row>
          <Col><h1>Column 3</h1></Col>
        </Row>
      </Container>

    </div>
  )
}

export default TemplateThree;

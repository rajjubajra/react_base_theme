import React from 'react'
import Nav from '../../components/header/Nav';
import { Container, Row } from 'react-bootstrap';

import PhotoBox from './PhotoBox';


export const BoxTwo = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Row>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="500px" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="500px" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="500px" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="500px" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="500px" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="500px" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="500px" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="500px" height="400px" />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default BoxTwo;

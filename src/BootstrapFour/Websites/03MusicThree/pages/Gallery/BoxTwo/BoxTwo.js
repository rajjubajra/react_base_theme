import React from 'react'
import { Container, Row } from 'react-bootstrap';

import PhotoBox from './PhotoBox';


export const BoxTwo = () => {
  return (
    <Container>
      <Row>
        <div className="col-lg-6 col-md-6 mt-1">
          <PhotoBox width="100%" height="auto" />
        </div>
        <div className="col-lg-6 col-md-6 mt-1">
          <PhotoBox width="100%" height="auto" />
        </div>
        <div className="col-lg-6 col-md-6 mt-1">
          <PhotoBox width="100%" height="auto" />
        </div>
        <div className="col-lg-6 col-md-6 mt-1">
          <PhotoBox width="100%" height="auto" />
        </div>
        <div className="col-lg-6 col-md-6 mt-1">
          <PhotoBox width="100%" height="auto" />
        </div>
      </Row>
    </Container>

  )
}

export default BoxTwo;

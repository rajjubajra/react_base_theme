import React from 'react';
import './SlideOne.scss';
import Nav from '../../components/header/Nav';
import Slides from './Slides';
import { Container, Row } from 'react-bootstrap';



export const SlideOne = () => {
  return (
    <div className='slide-one'>
      <Nav />
      <Container>
        <Row className="justify-content-center">
          <div className="slide">
            <Slides />
          </div>
        </Row>
      </Container>

    </div>
  )
}
export default SlideOne;
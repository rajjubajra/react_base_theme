import React from 'react';
import './SlideTwo.scss';
import Nav from '../../components/header/Nav';
import Slides from './Slides';
import { Container, Row } from 'react-bootstrap';



export const SlideTwo = () => {
  return (
    <div className='slide-two'>
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
export default SlideTwo;
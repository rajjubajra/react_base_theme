import React from 'react';
import './SlideThree.scss';
import Nav from '../../components/header/Nav';
import Slides from './Slides';
import { Container, Row } from 'react-bootstrap';



export const SlideThree = () => {
  return (
    <div className='slide-three'>
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
export default SlideThree;
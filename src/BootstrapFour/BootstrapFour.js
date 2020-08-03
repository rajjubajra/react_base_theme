import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './B4Components/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TitleNNav from './B4Components/B4Header.sj/TitleNNav';
import './BootstrapFour.scss';


const BootsrapFour = () => {

  return (
    <Container className='mt-5'>
      <TitleNNav title={'Websites [Bootstrap]'} />
      <Row>
        <Cards title="Profile 2020" linkref="/portfolio2020" />
        <Cards title="Music" linkref="/music-zero" />
        <Cards title="Landing Page" linkref="/b4-landing-page" />
        <Cards title="Photography" linkref="/photography" />
        <Cards title="Profile Aaa" linkref="/profile-aaa" />
        <Cards title="Blank Card 4" linkref="#" />
        <Cards title="Blank Card 5" linkref="#" />
      </Row>
    </Container>
  )
}

export default BootsrapFour

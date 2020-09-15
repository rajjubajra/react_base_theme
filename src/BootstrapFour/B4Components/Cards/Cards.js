import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card';
import TitleNNav from '../B4Header/TitleNNav';

function Cards() {
  return (
    <Container className='mt-5'>
      <TitleNNav title={"LandingPage"} href={"websites-bootstrap"} />
      <Row>
        <Card title="Special Offer" linkref="/special-Offer" />
        <Card title="Blank Card 1" linkref="#" />
        <Card title="Blank Card 2" linkref="#" />
        <Card title="Blank Card 3" linkref="#" />
        <Card title="Blank Card 4" linkref="#" />
        <Card title="Blank Card 5" linkref="#" />
      </Row>
    </Container>
  )
}

export default Cards

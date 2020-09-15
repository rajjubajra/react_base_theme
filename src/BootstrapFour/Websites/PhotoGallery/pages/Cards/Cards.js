import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card';
import { pagelink } from '../../PageLink';

function Cards() {
  return (
    <Container className='mt-5'>
      <Row>
        <Card title="Travel" linkref={`${pagelink.gallery}/15`} />
        <Card title="Food" linkref={`${pagelink.gallery}/16`} />
        <Card title="Music" linkref={`${pagelink.gallery}/17`} />
        <Card title="Garden" linkref={`${pagelink.gallery}/18`} />
        <Card title="Blank Card 4" linkref="#" />
        <Card title="Blank Card 5" linkref="#" />
      </Row>
    </Container>
  )
}

export default Cards

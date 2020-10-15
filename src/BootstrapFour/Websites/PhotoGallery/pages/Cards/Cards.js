import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card';
import { pagelink } from '../../PageLink';

function Cards() {
  return (
    <Container className='mt-5'>
      <Row>
        <Card title="Travel" text="My Photo" type="jpeg" linkref={`${pagelink.gallery}/15`} />
        <Card title="Food" text="My Photo" type="jpeg" linkref={`${pagelink.gallery}/16`} />
        <Card title="Music" text="My Photo" type="jpeg" linkref={`${pagelink.gallery}/17`} />
        <Card title="Garden" text="My Photo" type="jpeg" linkref={`${pagelink.gallery}/18`} />
        <Card title="Social Media" text="Out sourced" type="png" linkref={`${pagelink.gallery}/19`} />
        <Card title="Social Media SVG" text="Out sourced" type="svg" linkref={`${pagelink.gallery}/20`} />
        <Card title="Icons Mis" text="Out sourced" type="svg" linkref={`${pagelink.gallery}/21`} />
        <Card title="Blank Card 5" text="#" type="#" linkref="#" />
      </Row>
    </Container>
  )
}

export default Cards

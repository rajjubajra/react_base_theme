import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';

function Pages() {
  return (
    <Container className="mt-5">
      <TitleNNav title={'Form [Bootstrap Four]'} href="/websites-bootstrap" />
      <Row>
        <Cards title="Form - 1" linkref={pagelink.one} />
        <Cards title="Form - 2" linkref={pagelink.two} />
        <Cards title="Form - 3" linkref={pagelink.three} />
      </Row>
    </Container>
  )
}

export default Pages

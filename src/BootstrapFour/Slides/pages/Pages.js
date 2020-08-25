import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';
import { cssclass } from '../CssClass';

function Pages() {
  return (
    <Container className={`${cssclass.base_classname}`}>
      <TitleNNav title={'Slide'} subtitle="Bootstrap 4" href="/websites-bootstrap" />
      <Row>
        <Cards title="Slide - 1" linkref={pagelink.one} />
        <Cards title="Slide - 2" linkref={pagelink.two} />
        <Cards title="Slide - 3" linkref={pagelink.three} />
      </Row>
    </Container>
  )
}

export default Pages

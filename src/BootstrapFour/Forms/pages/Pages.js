import React from 'react';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';
import { cssclass } from '../CssClass';

function Pages() {
  return (
    <Container className={`${cssclass.base_classname}`}>
      <TitleNNav title={'Form'} subtitle="Bootstrap 4" href="/websites-bootstrap" />
      <Row>
        <Cards title="Form - 1" linkref={pagelink.one} />
        <Cards title="Form - 2" linkref={pagelink.two} />
        <Cards title="Form - 3" linkref={pagelink.three} />
        <Cards title="Form - 4" linkref={pagelink.four} />
      </Row>
    </Container>
  )
}

export default Pages

import React from 'react';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';
import { cssclass } from '../CssClass';

function Pages() {
  return (
    <Container className={`${cssclass.base_classname}`}>
      <TitleNNav title={'Blog'} subtitle="Bootstrap 4" href="/websites-bootstrap" />
      <Row>
        <Cards title="Blog - 1" text="Text only" linkref={pagelink.one} />
        <Cards title="Blog - 2" text="Text Image - Column narrow" linkref={pagelink.two} />
        <Cards title="Blog - 3" text="Text Image - Row" linkref={pagelink.three} />
        <Cards title="Blog - 4" text="Text Image - Column wide" linkref={pagelink.four} />
        <Cards title="Blog - 5" text="Masonry" linkref={pagelink.five} />
      </Row>
    </Container>
  )
}

export default Pages

import React from 'react';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';
import { cssclass } from '../CssClass';

function Pages() {
  return (
    <Container className={`${cssclass.base_classname}`}>
      <TitleNNav title={'Column'} subtitle="Bootstrap 4" href="/websites-bootstrap" />
      <Row>
        <Cards title="Column - 1" linkref={pagelink.one} />
        <Cards title="Column - 2" linkref={pagelink.two} />
        <Cards title="Column - 3" linkref={pagelink.three} />
      </Row>
    </Container>
  )
}

export default Pages

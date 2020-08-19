import React from 'react';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';
import { cssclass } from '../CssClass';

function Pages() {
  return (
    <Container className={`${cssclass.base_classname}`}>
      <TitleNNav title={'Blog [Bootstrap Four]'} href="/websites-bootstrap" />
      <Row>
        <Cards title="Blog - 1" linkref={pagelink.one} />
        <Cards title="Blog - 2" linkref={pagelink.two} />
        <Cards title="Blog - 3" linkref={pagelink.three} />
        <Cards title="Blog - 4" linkref={pagelink.four} />
      </Row>
    </Container>
  )
}

export default Pages

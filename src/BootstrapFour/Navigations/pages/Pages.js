import React from 'react';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';
import { cssclass } from '../CssClass';

function Pages() {
  return (
    <Container className={`${cssclass.base_classname}`}>
      <TitleNNav title={'Navigations [Bootstrap Four]'} href="/websites-bootstrap" />
      <Row>
        <Cards title="Navigation - 1" linkref={pagelink.one} />
        <Cards title="Navigation - 2" linkref={pagelink.two} />
        <Cards title="Navigation - 3" linkref={pagelink.three} />
      </Row>
    </Container>
  )
}

export default Pages

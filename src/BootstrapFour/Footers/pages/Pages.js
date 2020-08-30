import React from 'react';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';
import { cssclass } from '../CssClass';

function Pages() {
  return (
    <Container className={`${cssclass.base_classname}`}>
      <TitleNNav title="Footer" subtitle="Bootstrap 4" href="/websites-bootstrap" />
      <Row>
        <Cards title="Footer - 1" text="Four Column" type="Light" linkref={pagelink.one} />
        <Cards title="Footer - 2" text="Two Column LT" type="Light" linkref={pagelink.two} />
        <Cards title="Footer - 3" text="Two Column RT" type="Light" linkref={pagelink.three} />
        <Cards title="Footer - 4" text="1 Column 2 Rows" type="Light" linkref={pagelink.four} />
        <Cards title="Footer - 5" text="2 Column 1 Row" type="Light" linkref={pagelink.five} />
      </Row>
    </Container>
  )
}
export default Pages
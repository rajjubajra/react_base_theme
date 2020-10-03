import React from 'react';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';
import { cssclass } from '../CssClass';

function Pages() {
  return (
    <Container className={`${cssclass.base_classname}`}>

      <TitleNNav title={'Navigations'} subtitle="Bootstrap 4" href="/websites-bootstrap" />
      <Row>
        <Cards
          title="Navigation - 1"
          text="General Responsive"
          type="Regualar"
          linkref={pagelink.one} />
        <Cards
          title="Navigation - 2"
          text="Full Page Navigation"
          type="Full Page"
          linkref={pagelink.two} />
        <Cards
          title="Navigation - 3"
          text="Menu & Description"
          type="with brief description"
          linkref={pagelink.three} />
        <Cards
          title="Navigation - 4"
          text="Minimalist Vibe"
          type="Minimalist"
          linkref={pagelink.four} />
        <Cards
          title="Navigation - 5"
          text="News and Magazine Menu"
          type="Magazine/Nes"
          linkref={pagelink.five} />
        <Cards
          title="Navigation - 6"
          text="Big & Bold Menu"
          type="Big & Bold"
          linkref={pagelink.six} />
      </Row>
    </Container>
  )
}

export default Pages

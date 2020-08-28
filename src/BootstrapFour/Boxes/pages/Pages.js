import React from 'react';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';
import { cssclass } from '../CssClass';


function Pages() {
  return (
    <Container className={`${cssclass.base_classname}`}>
      <TitleNNav title={'Boxes'} subtitle="Bootstrap 4" href="/websites-bootstrap" />
      <Row>
        <Cards
          title="Box - 1"
          text="Text on image"
          type="Light"
          linkref={pagelink.one} />
        <Cards
          title="Box - 7"
          text="Text on image"
          type="Bold"
          linkref={pagelink.seven} />

        <Cards
          title="Box - 2"
          text="Image with Tag"
          type="Light"
          linkref={pagelink.two} />

        <Cards
          title="Box - 3"
          text="Image Date Title & Body"
          type="Light"
          linkref={pagelink.three} />

        <Cards
          title="Box - 4"
          text="Image and text - Column"
          type="Light"
          linkref={pagelink.four} />

        <Cards
          title="Box - 5"
          text="Image and text - Row"
          type="Light"
          linkref={pagelink.five} />

        <Cards
          title="Box - 6"
          text="Masonry"
          type="- "
          linkref={pagelink.six} />

        <Cards
          title="Box - 8"
          text="Text only"
          type=" - "
          linkref={pagelink.eight} />

        <Cards
          title="Box - 9"
          text="Text/Image 50/50"
          type=" - "
          linkref={pagelink.nine} />

      </Row>
    </Container>
  )
}

export default Pages

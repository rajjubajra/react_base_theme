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

        <Cards
          title="Box - 10"
          text="Text/Image 50/50"
          type=" - "
          linkref={pagelink.ten} />

        <Cards
          title="Box - 11"
          text="Team member"
          type="Square Image"
          linkref={pagelink.eleven} />

        <Cards
          title="Box - 12"
          text="Team member"
          type="Circle Image"
          linkref={pagelink.twelve} />

        <Cards
          title="Box - 13"
          text="Text with Quote"
          type="Quote"
          linkref={pagelink.thirteen} />

        <Cards
          title="Box - 14"
          text="Read More Block"
          type="Block"
          linkref={pagelink.fourteen} />

        <Cards
          title="Box - 15"
          text="Read More Block"
          type="Block"
          linkref={pagelink.fifteen} />

        <Cards
          title="Box - 16"
          text="Read More Block"
          type="Block"
          linkref={pagelink.sixteen} />

        <Cards
          title="Box - 17"
          text="Price Card"
          type="Block"
          linkref={pagelink.seventeen} />

        <Cards
          title="Box - 18"
          text="Offer Card"
          type="Block"
          linkref={pagelink.eighteen} />

        <Cards
          title="Box - 19"
          text="Hero Card"
          type="Block"
          linkref={pagelink.nineteen} />

      </Row>
    </Container>
  )
}

export default Pages

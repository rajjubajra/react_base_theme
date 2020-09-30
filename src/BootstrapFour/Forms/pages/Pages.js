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
        <Cards title="Form - 1" text="Contact Form" type="contact" linkref={pagelink.one} />
        <Cards title="Form - 2" text="Contact Form" type="contact" linkref={pagelink.two} />
        <Cards title="Form - 3" text="Contact Form" type="contact" linkref={pagelink.three} />
        <Cards title="Form - 4" text="Login Form" type="Login" linkref={pagelink.four} />
        <Cards title="Form - 5" text="Contact Form" type="contact" linkref={pagelink.five} />
        <Cards title="Form - 6" text="Contact Form" type="contact" linkref={pagelink.six} />
        <Cards title="Form - 7" text="Search Form" type="Search" linkref={pagelink.seven} />
      </Row>
    </Container>
  )
}

export default Pages

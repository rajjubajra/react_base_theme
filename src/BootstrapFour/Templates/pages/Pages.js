import React from 'react';
import { Container, Row } from 'react-bootstrap'
import TitleNNav from '../../B4Components/B4Header/TitleNNav';
import Cards from '../../B4Components/Cards';
import { pagelink } from '../PageLink';
import { cssclass } from '../config/CssClass';
import SideNav from '../components/SideNav/SideNav';

function Pages() {
  return (
    <>
      <SideNav />
      <Container className={`${cssclass.base_classname}`}>
        <TitleNNav title="Templates" subtitle="Bootstrap 4" href="/websites-bootstrap" />
        <Row>
          <Cards title="Template - 1" text="Home" linkref={pagelink.home} />
          <Cards title="Template - 2" text="About" linkref={pagelink.about} />
          <Cards title="Template - 3" text="Contact" linkref={pagelink.contact} />
        </Row>
      </Container>
    </>
  )
}

export default Pages

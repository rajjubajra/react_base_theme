import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cards from '../../../B4Components/Cards';
import TitleNNav from '../../../B4Components/B4Header.sj/TitleNNav';

function PageGallery() {
  return (
    <Container>
      <main>
        <section>
          <TitleNNav title={"Photography"} href={"/websites-bootstrap"} />
        </section>
        <Row>
          <Cards title={"Photography - 1"} linkref={"photography-1"} />
          <Cards title={"Photography - 2"} linkref={"photography-2"} />
          <Cards title={"Photography - 3"} linkref={"photography-3"} />
          <Cards title={"Photography - 4"} linkref={"photography-4"} />
          <Cards title={"Photography - 5"} linkref={"photography-5"} />
          <Cards title={"Photography - 6"} linkref={"photography-6"} />
        </Row>
      </main>
    </Container>
  )
}

export default PageGallery

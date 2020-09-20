import React from 'react';
import Cards from '../BootstrapFour/B4Components/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TitleNNav from '../BootstrapFour/B4Components/B4Header/TitleNNav';
import './Applications.scss';


const Applications = () => {

  return (
    <Container className='mt-5'>
      <TitleNNav
        title={'Web Applications'}
        subtitle="WebApps"
        href="/websites" />
      <Row>

        <Cards
          title="D8 Daybook"
          linkref="/d8daybook" />

        <Cards
          title="Application A"
          text="Application"
          type="Web Application"
          linkref="#" />

        <Cards
          title="Application B"
          text="Application"
          type="Web Application"
          linkref="#" />

        <Cards
          title="Application C"
          text="Application"
          type="Web Application"
          linkref="#" />

        <Cards
          title="Application D"
          text="Application"
          type="Web Application"
          linkref="#" />

        <Cards
          title="Application E"
          text="Application"
          type="Web Application"
          linkref="#" />

        <Cards
          title="Application F"
          text="Application"
          type="Web Application"
          linkref="#" />

      </Row>
    </Container>
  )
}

export default Applications

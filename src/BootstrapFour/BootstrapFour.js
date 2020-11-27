import React from 'react';
import Cards from './B4Components/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TitleNNav from './B4Components/B4Header/TitleNNav';
import './BootstrapFour.scss';


const BootsrapFour = () => {

  return (
    <Container className='mt-5'>
      <TitleNNav title={'Websites'} subtitle="Bootstrap 4" href="/websites" />
      <Row>

        <Cards
          title="Coming Soon"
          linkref="/"
          text="Coming Soon"
          type="Multipurpose"
        />

        <Cards
          title="Music Zero"
          linkref="/music-zero"
          text="Music"
          type="Solo Artist / Band"
        />

        <Cards
          title="Music One"
          linkref="/b4MusicOne-home"
          text="Music"
          type="Band / Solo Artist"
        />

        <Cards
          title="Music Two"
          linkref="/b4Music-two-home"
          text="Music"
          type="Band / Solo Artist"
        />

        <Cards
          title="Music Three"
          linkref="/b4Music-three-home"
          text="Music"
          type="Band / Solo Artist"
        />

        <Cards
          title="Blog One"
          linkref="/b4Blog-one-"
          text="Blog"
          type="Blog"
        />

        <Cards
          title="Blog Two"
          linkref="/b4Blog-two-"
          text="Blog"
          type="Blog"
        />

        <Cards
          title="Blog Theree"
          linkref="/b4Blog-three-"
          text="Blog"
          type="Blog"
        />

        <Cards
          title="Business One"
          text="Business"
          type="Local Business/Professioan Services"
          linkref="/b4-business-one-home" />

        <Cards
          title="Business Two"
          text="Business"
          type="Local Business/Professioan Services"
          linkref="/b4-business-two" />


        <Cards
          title="Photography One"
          linkref="/b4Photography-one"
          text="Photography"
          type="Photographer"
        />

        <Cards
          title="Art & Design"
          linkref="/artNdesign" />

        <Cards
          title="Profile 2020"
          linkref="/portfolio2020" />

        <Cards
          title="Landing Page"
          linkref="/b4-landing-page" />

        <Cards
          title="Photo Gallery"
          linkref="/photo-gallery" />

        <Cards
          title="Profile Aaa"
          linkref="/profile-aaa" />

        <Cards
          title="Profile Aab"
          linkref="/profile-aab" />

        <Cards
          title="Photography A"
          text="Photography A"
          type="Image scroll Horizontal"
          linkref="/photography-A" />


        <Cards
          title="Base Theme"
          text="Base Theme"
          type="Do not Work on this Theme"
          linkref="/basetheme" />


      </Row>
    </Container>
  )
}

export default BootsrapFour
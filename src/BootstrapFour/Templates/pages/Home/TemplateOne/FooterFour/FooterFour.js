import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Column from './Column';
import SocialMedia from './SocialMedia';


const about = [
  {
    id: "1",
    name: "About",
    nav: "about-us",
  },
  {
    id: "2",
    name: "Contact",
    nav: "contact",
  },
  {
    id: "3",
    name: "Newsroom",
    nav: "newsroom",
  },
  {
    id: "4",
    name: "Careers",
    nav: "careers",
  },
  {
    id: "5",
    name: "Shop",
    nav: "shop",
  },
  {
    id: "6",
    name: "Legal",
    nav: "legal",
  },
  {
    id: "7",
    name: "Blog",
    nav: "blog",
  }
]



const sectionStyle = {
  margin: "50px 0px"
}


export const FooterFour = () => {


  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col>
            <section style={sectionStyle}>
              <Column data={about} />
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterFour;
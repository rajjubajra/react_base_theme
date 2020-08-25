import React from 'react'
import Nav from '../../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import { cssclass } from '../../CssClass';
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

const support = [
  {
    id: "1",
    name: "Customer Support",
    nav: "customer-support",
  },
  {
    id: "2",
    name: "Information",
    nav: "information",
  },
  {
    id: "3",
    name: "FAQ",
    nav: "faq",
  },

]

const account = [
  {
    id: "1",
    name: "Login",
    nav: "login",
  },
  {
    id: "2",
    name: "New Member",
    nav: "new-member",
  },
  {
    id: "3",
    name: "My Account",
    nav: "my-account",
  },
  {
    id: "4",
    name: "Terms & Conditions",
    nav: "terms-condition",
  },
  {
    id: "5",
    name: "Create Account",
    nav: "create-account",
  },

]

const shopping = [
  {
    id: "1",
    name: "Brand",
    nav: "brand",
  },
  {
    id: "2",
    name: "Product Type",
    nav: "Product-type",
  },
  {
    id: "3",
    name: "Sale",
    nav: "sale",
  },
  {
    id: "4",
    name: "Product Material",
    nav: "product-material",
  },
  {
    id: "5",
    name: "Terms",
    nav: "terms",
  },

]





const sectionStyle = {
  margin: "50px 0px"
}
const titleStyle = {
  fontWeight: "300",
  letterSpacing: "0.1rem",
  fontSize: "1.3rem"
}


export const FooterFour = () => {


  return (
    <div className='footer'>
      <Nav />

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
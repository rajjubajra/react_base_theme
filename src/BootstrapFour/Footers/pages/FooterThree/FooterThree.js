import React from 'react'
import Nav from '../../components/header/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import Column from './Column';
import SocialMedia from './SocialMedia';


// const about = [
//   {
//     id: "1",
//     name: "About us",
//     nav: "about-us",
//   },
//   {
//     id: "2",
//     name: "Contact us",
//     nav: "contact-us",
//   },
//   {
//     id: "3",
//     name: "Newsroom",
//     nav: "newsroom",
//   },
//   {
//     id: "4",
//     name: "Careers",
//     nav: "careers",
//   },
//   {
//     id: "5",
//     name: "Go Shop",
//     nav: "go-shop",
//   },
//   {
//     id: "6",
//     name: "Legal",
//     nav: "legal",
//   },
//   {
//     id: "7",
//     name: "Blog",
//     nav: "blog",
//   }
// ]

// const support = [
//   {
//     id: "1",
//     name: "Customer Support",
//     nav: "customer-support",
//   },
//   {
//     id: "2",
//     name: "Information",
//     nav: "information",
//   },
//   {
//     id: "3",
//     name: "FAQ",
//     nav: "faq",
//   },

// ]

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

const footerAboutStyle = {
  fontWeight: "100"
}


export const FooterThree = () => {


  return (
    <div className='footer'>
      <Nav />

      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Row>
              <Col lg={6} md={6} sm={6} xs={12}>
                <section style={sectionStyle}>
                  <h4 style={titleStyle}>Account</h4>
                  <Column data={account} />
                </section>
              </Col>
              <Col lg={6} md={6} sm={6} xs={12}>
                <section style={sectionStyle}>
                  <h4 style={titleStyle}>Shopping</h4>
                  <Column data={shopping} />
                </section>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <section style={sectionStyle}>
              <div style={footerAboutStyle}>
                <h4 style={titleStyle}>About</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis eos, sapiente molestias illum neque laudantium mollitia dignissimos explicabo doloribus quibusdam pariatur quia accusamus vel odio aspernatur doloremque qui reprehenderit sed.</p>
              </div>
            </section>
          </Col>
        </Row>
        {/** SOCIAL MEDIA */}
        <Row>
          <Col>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterThree;
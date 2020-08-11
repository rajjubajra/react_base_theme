import React from 'react';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import D8WebForm from './D8WebForm';


function Page(props) {
  return (
    <>
      <Col lg={6} className="justify-content-center mt-2">
        <Jumbotron style={{ backgroundColor: "#fff" }}>
          <div>
            <img
              style={{ maxWidth: "300px" }}
              src={props.logoHorizontal.url} alt="logo" />
          </div>

          <section className="mt-5 d-flex">
            <div style={{
              paddingRight: "5px",
              marginRight: "15px",
              paddingTop: "8px",
              height: "150px",
              borderRight: "1px solid #ccc"
            }}>
              <img
                style={{ maxWidth: "40px", width: "95%" }}
                src={props.logoSquare.url} alt="logo" />
            </div>
            <div className='welcome' dangerouslySetInnerHTML={{ __html: props.bodyMsg }} />
          </section>


          <div>

            <Button
              variant="outline-dark"
              className="mr-1"
              onClick={() => window.open(props.linkWebHosting.uri)}
              style={{ fontWeight: "100" }}>
              {props.linkWebHosting.title}

            </Button>
            <Button
              variant="outline-dark"
              className="mr-1"
              onClick={() => window.open(props.linkFreeImages.uri)}
              style={{ fontWeight: "100" }}>
              {props.linkFreeImages.title}
            </Button>
            <Button
              variant="outline-dark"
              className="mr-1"
              onClick={() => window.open("/websites")}
              style={{ fontWeight: "100" }}>
              {props.linkFreeImages.title}
            </Button>
          </div>


        </Jumbotron>
      </Col>
      <Col lg={12}>
        <p>Contact:</p>
        <D8WebForm />
      </Col>
    </>


  )
}

export default Page

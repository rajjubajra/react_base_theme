import React from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap';


const data = [
  {
    id: 1,
    text: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis alias, quas sequi provident necessitatibus assumenda culpa libero, eveniet quasi itaque impedit illum vero dignissimos illo perspiciatis temporibus laborum rem!</p>",
    title: "Ipsum dolor"
  },
  {
    id: 2,
    text: "<p>Wamet consectetur adipisicing elit. Laudantium perferendis alias, quas sequi provident necessitatibus assumenda culpa libero, eveniet quasi itaque impedit illum vero dignissimos illo perspiciatis temporibus laborum rem! Lorem, ipsum dolor sit</p>",
    title: "Laudantium perferendis"
  },
  {
    id: 3,
    text: "<p>Torem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis alias, quas sequi provident necessitatibus assumenda culpa libero, eveniet quasi itaque impedit illum vero dignissimos illo perspiciatis temporibus laborum rem!</p>",
    title: "Eveniet quasi"
  },
  {
    id: 4,
    text: "<p>Rem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis alias, quas sequi provident necessitatibus assumenda culpa libero, eveniet quasi itaque impedit illum vero dignissimos illo perspiciatis temporibus laborum rem!</p>",
    title: "Assumenda culpa libero"
  },
  {
    id: 5,
    text: "<p>Zonsectetur adipisicing elit. Laudantium perferendis alias, quas sequi provident necessitatibus assumenda culpa libero, eveniet quasi itaque impedit illum vero dignissimos illo perspiciatis temporibus laborum rem! Rem, ipsum dolor sit amet</p>",
    title: "Perferendis alias,"
  },
]

const projects = {
  display: "flex",
  flexWrap: "wrap"
}

const cardSize = {
  maxWidth: "300px",
  minHeight: "375px",
  width: "100%",
  margin: "10px",
  border: "1px solid rgba(0,0,0,.125)"
}

export const Project = () => {

  function createMarkup(text) {
    return { __html: text };
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Projects</h1>
            <div style={projects}>
              {
                data.map(item => {
                  return <div style={cardSize}>
                    <Card key={item.id} style={{ border: "0px" }}>
                      <Card.Body>
                        <h2>{item.title}</h2>
                        <Card.Text>
                          <div dangerouslySetInnerHTML={createMarkup(item.text)} />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                })
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Project;

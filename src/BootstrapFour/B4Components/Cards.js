import React from 'react'
import Card from 'react-bootstrap/Card';


function Cards(props) {
  return (
    <Card style={{
      width: '22rem',
      height: '200px',
      position: 'relative',
      margin: "10px",
      borderRadius: '0px'
    }} >
      <Card.Body>
        <Card.Title style={{
          position: "absolute",
          top: "10%",
          fontWeight: "200"
        }}>{props.title}</Card.Title>

        <Card.Text
          style={{
            position: "absolute",
            top: "40%",
            width: "88%"
          }}
        >
          <div style={{
            width: "100%",
            textAlign: "center",
            letterSpacing: "0.15rem",
            fontWeight: "300",
            fontSize: "0.8rem"

          }}>
            <p>[ {props.text} ]</p>
            [ {props.type} ]
          </div>
        </Card.Text>

        <Card.Link
          style={{
            position: "absolute",
            bottom: "10px",
            color: "#000",
            fontWeight: "300",
            letterSpacing: "0.07rem"
          }}
          href={props.linkref}>Preveiw</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Cards




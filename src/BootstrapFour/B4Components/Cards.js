import React from 'react';
import { Link } from 'react-router-dom';


function Cards(props) {
  return (
    <div style={{
      width: '22rem',
      height: '200px',
      position: 'relative',
      margin: "10px",
      borderRadius: '0px',
      border: "1px solid #ccc",
      padding: "20px"
    }} >
      <div>
        <h2 style={{
          position: "absolute",
          top: "10%",
          fontWeight: "200",
          fontSize: "0.9rem",
          letterSpacing: "0.05rem"
        }}>{props.title}</h2>

        <div
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
        </div>

        <Link
          style={{
            position: "absolute",
            bottom: "20px",
            color: "#000",
            fontWeight: "300",
            letterSpacing: "0.07rem",
            textDecoration: "none"
          }}
          to={props.linkref}>Preveiw</Link>
      </div>
    </div>
  )
}

export default Cards




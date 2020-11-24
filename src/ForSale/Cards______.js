import React from 'react';
import { Link } from 'react-router-dom';


function Cards(props) {





  return (
    <div
      style={{
        width: '35rem',
        height: '295px',
        position: 'relative',
        margin: "10px",
        borderRadius: '0px',
        border: "1px solid #ccc",
        padding: "20px",
        zIndex: `${onmouseenter && '10' && onmouseleave && '0'}`,
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
          target="_blank"
          to={props.linkref}>Preveiw</Link>
      </div>
      <img
        style={{
          position: 'relative',
          zIndex: `${onmouseenter && '0' && onmouseleave && '10'}`,
          width: "100%"
        }}
        src={props.bgImage} alt="background" />
    </div>
  )
}

export default Cards




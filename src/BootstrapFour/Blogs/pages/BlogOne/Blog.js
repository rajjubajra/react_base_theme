import React from 'react';
import { Link } from 'react-router-dom';

const sectionStyle = {
  width: "100%",
  textAlign: "center",
  margin: "150px 0px"
}

const dateStyle = {
  fontSize: "0.9rem",
  fontWeight: "100",
  letterSpacing: "0.05rem"
}

const titleStyle = {
  textTransform: "capitalize",
  fontWeight: "200",
  margin: "20px 0px"
}

const buttonStyle = {
  fontWeight: "100",
  letterSpacing: "0.1rem",
  padding: "0px 20px 10px 20px",
  borderBottom: "1px solid #ccc",
  textDecoration: "none",
  color: "#333"
}


function Blog(props) {

  return (
    <section style={sectionStyle}>
      <p>{props.id}</p>
      <p style={dateStyle}>{props.day} {props.month}, {props.year}</p>
      <h1 style={titleStyle} >{props.title}</h1>
      <Link

        onClick={() => props.readmore(props.id)}
        style={buttonStyle}>Read More</Link>
    </section>
  )
}

export default Blog

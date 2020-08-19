import React from 'react';
import { Link } from 'react-router-dom';

const caption = {
  color: "#000",
  background: "rgb(248, 249, 250, 0.21)",
  width: "100%",
  fontWeight: "100",
  letterSpacing: "0.02rem",
  marginTop: "5px",
}

const title = {
  fontSize: "1.2rem",
  fontWeight: "400"
}

const buttonStyle = {
  fontSize: "1rem",
  fontWeight: "100",
  color: "#333",
  padding: "10px 20px",
  borderBottom: "1px solid #999",
  textDecoration: "none"
}

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function Text() {
  const date = new Date();

  return (
    <section style={caption}>
      <div><p>Date: {date.getDate()} {month[date.getMonth()]}, {date.getFullYear()}</p></div>

      <div style={title}>Lorem ipsum dolor</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda asperiores voluptates quam aliquam aliquid nostrum facere numquam ipsum fugiat obcaecati ad, quibusdam ratione...</p>
      <Link style={buttonStyle}>read more</Link>
    </section>
  )
}

export default Text

import React from 'react';
import { Button } from 'react-bootstrap';


const caption = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: "25px",
  width: "100%",
  minHeight: "200px",
  fontWeight: "100",
  letterSpacing: "0.02rem",
  color: "#6a6a6a",
}

const title = {
  fontSize: "1.2rem",
  fontWeight: "400"
}

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function Text() {

  const date = new Date();

  return (
    <section style={caption}>
      <div><p>Date: {date.getDate()} {month[date.getMonth()]}, {date.getFullYear()}</p></div>
      <div style={title}>Story: Box Five</div>
      <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odit magnam.</p>
      </div>
      <div>
        <Button variant="outline-light">Read More</Button>
      </div>

    </section>
  )
}

export default Text

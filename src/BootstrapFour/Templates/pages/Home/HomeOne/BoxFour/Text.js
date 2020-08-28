import React from 'react';
import { Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';


const caption = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "25px",
  width: "100%",
  minHeight: "600px",
  fontWeight: "100",
  letterSpacing: "0.02rem",
  color: "#6a6a6a",
  opacity: "1",
  transition: "opacity 2s",
  transitionDelay: "1s"
}

const beforeCaption = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "25px",
  width: "100%",
  minHeight: "600px",
  fontWeight: "100",
  letterSpacing: "0.02rem",
  color: "#6a6a6a",
  opacity: "0",
  transition: "opacity 2s",
}

const title = {
  fontWeight: "200",
  opacity: 1,
  transition: "opacity 2s",

}

const beforeTitle = {
  opacity: 0,
  tranistion: "opacity 1s"
}

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];





function Text() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  const date = new Date();

  return (
    <section ref={ref} style={inView ? caption : beforeCaption}>
      <div>
        <p>Date: {date.getDate()} {month[date.getMonth()]}, {date.getFullYear()}</p>
      </div>
      <div>
        <h3 style={title}>
          Story: Text Image
        </h3>
      </div>
      <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odit magnam.</p>
      </div>
      <div>
        <Button variant="outline-dark">Read More</Button>
      </div>

    </section>
  )
}

export default Text

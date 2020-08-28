import React from 'react'
import { PhotoPlaceholder } from 'react-placeholder-image';
import { useInView } from 'react-intersection-observer';


const photo = {
  maxWidth: "800px",
  Width: "100%",
  Height: "auto",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
}
const styleSection = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  opacity: "1",
  transition: "opacity 2s"
}
const styleBeforeSectioin = {
  opacity: "0",
  transition: "opacity 1s"
}

function Photo() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })


  return (
    <section
      ref={ref}
      style={inView ? styleSection : styleBeforeSectioin}>
      <div style={photo}>
        <PhotoPlaceholder
          className="d-block w-100"
          width={600}
          height={400}
        />
      </div>
    </section>
  )
}
export default Photo
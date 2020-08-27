import React from 'react'
import { PhotoPlaceholder } from 'react-placeholder-image';
import { useInView } from 'react-intersection-observer';


const photo = {
  display: "block",
  maxWidth: "500px",
  minHeight: "600px",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
  opacity: "1",
  transition: "opacity 1s"
}


const beforeView = {
  margin: "27px",
  maxWidth: "500px",
  minHeight: "600px",
  position: "relative",
  transition: "opacity 1s",
  opacity: "0",
}


function Photo() {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <div ref={ref} style={inView ? photo : beforeView} >
      <PhotoPlaceholder
        className="d-block w-100"
        width={500}
        height={600}
      />
    </div>
  )
}

export default Photo

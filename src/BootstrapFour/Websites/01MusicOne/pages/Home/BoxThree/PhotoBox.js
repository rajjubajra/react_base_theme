import React from 'react'
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';


const boxOne = {
  display: "block",
  maxWidth: "500px",
  minHeight: "400px",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
}
const caption = {
  width: "100%",
  fontWeight: "100",
  letterSpacing: "0.02rem",
  marginTop: "5px",
}

const title = {
  fontSize: "1.2rem",
  fontWeight: "400"
}

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function PhotoBox() {

  const date = new Date();

  return (
    <div style={boxOne}>
      <PhotoMusic
        width="100%"
        height={400}
      />
      <section style={caption}>
        <div><p>Date: {date.getDate()} {month[date.getMonth()]}, {date.getFullYear()}</p></div>
        <div style={title}><h4>Story: Text Image</h4></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odit magnam.</p>
      </section>
    </div>
  )
}

export default PhotoBox

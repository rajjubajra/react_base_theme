import React from 'react'
import Image from '../../../components/Image';


const boxOne = {
  display: "block",
  maxWidth: "500px",
  minHeight: "400px",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
}
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

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const imgOne = '';
const imgTwo = '';
const imgThree = '';
const imgFour = '';



function PhotoBox() {



  return (
    <div style={boxOne}>
      <Image width="100%" height="400px" />
      <section style={caption}>
        <div style={title}>Text Image</div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odit magnam.</p>
      </section>
    </div>
  )
}

export default PhotoBox

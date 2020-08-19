import React from 'react'
import Photo from './Photo';
import Text from './Text';


const boxOne = {
  display: "block",
  maxWidth: "500px",
  minHeight: "400px",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
}


function PhotoBlog() {

  const date = new Date();

  return (
    <div style={boxOne}>
      <Photo />
      <Text />
    </div>
  )
}

export default PhotoBlog

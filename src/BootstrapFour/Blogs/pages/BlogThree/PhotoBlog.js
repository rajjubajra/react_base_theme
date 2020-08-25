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


function PhotoBlog(props) {

  //const date = new Date();

  return (
    <div style={boxOne}>
      <Photo />
      <Text
        title={props.title}
        body={props.body}
        id={props.id}
      />
    </div>
  )
}

export default PhotoBlog

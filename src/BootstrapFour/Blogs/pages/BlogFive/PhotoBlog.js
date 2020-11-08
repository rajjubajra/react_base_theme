import React from 'react'
import Photo from './Photo';
import Text from './Text';


const boxOne = {
  display: "block",
  maxWidth: "980px",
  minHeight: "400px",
  margin: "10px",
  border: "0px solid #eee",
  position: "relative",
}


function PhotoBlog(props) {



  return (
    <div style={boxOne}>
      <div><Photo /></div>
      <div>
        <Text
          title={props.title}
          body={props.body}
          id={props.id}
        />
      </div>
    </div>
  )
}

export default PhotoBlog

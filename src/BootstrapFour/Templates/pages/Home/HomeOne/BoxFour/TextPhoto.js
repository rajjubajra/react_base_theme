import React from 'react'
import Photo from './Photo';
import Text from './Text';



const boxFour = {
  position: "relative"
}


function TextPhoto() {


  return (
    <div style={boxFour}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Text />
          </div>
          <div className="col-lg-6">
            <Photo />
          </div>
        </div>
      </div>
    </div >
  )
}

export default TextPhoto

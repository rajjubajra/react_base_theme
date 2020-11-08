import React from 'react'
import Photo from './Photo';
import Text from './Text';



const boxFour = {
  position: "relative"
}


function PhotoText() {


  return (
    <div style={boxFour}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6" >
            <Photo />
          </div>
          <div className="col-lg-6 col-md-6">
            <Text />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoText

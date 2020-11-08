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
          <div className="col-lg-6 col-md-6">
            {/** desktop and tablet */}
            <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none">
              <Text />
            </div>
            {/** Mobile device */}
            <div className="d-block d-lg-none d-md-none d-sm-block   d-xs-block">
              <Photo />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            {/** desktop and tablet */}
            <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none">
              <Photo />
            </div>
            {/** Mobile device */}
            <div className="d-block d-lg-none d-md-none d-sm-block d-xs-block">
              <Text />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TextPhoto

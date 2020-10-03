import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';


function Navigation(props) {

  const styleContainer = {
    position: 'relative',
    display: props.view ? 'block' : 'none'
  }


  return (
    <div style={styleContainer} className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <LeftContent />
        </div>
        <div className="col-lg-6 col-sm-12">
          <span><RightContent /></span>
        </div>
      </div>
    </div>
  )
}

export default Navigation

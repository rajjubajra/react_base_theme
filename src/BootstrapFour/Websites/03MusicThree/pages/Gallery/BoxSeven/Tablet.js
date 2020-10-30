import React from 'react'
import PhotoBox from './PhotoBox';
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';

function Tablet(props) {

  const longPhotoStyle = {
    margin: "7px",
  }

  return (
    <div className="container">
      <div className="row">
        <div style={longPhotoStyle}>
          <h1>{props.title}</h1>
          <PhotoMusic
            className="d-block w-100"
            width="95%"
            height="300px"
          />
        </div>
      </div>
      <div className="row d-flex flex-wrap">
        <div><PhotoBox width="330px" height="330px" /></div>
        <div><PhotoBox width="330px" height="330px" /></div>
        <div><PhotoBox width="330px" height="330px" /></div>
        <div><PhotoBox width="330px" height="330px" /></div>
        <div><PhotoBox width="330px" height="330px" /></div>
        <div><PhotoBox width="330px" height="330px" /></div>
      </div>
    </div>
  )
}

export default Tablet

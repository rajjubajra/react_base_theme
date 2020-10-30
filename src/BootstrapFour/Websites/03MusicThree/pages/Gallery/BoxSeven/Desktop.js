import React from 'react'
import PhotoBox from './PhotoBox';
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';




function Desktop(props) {

  const longPhotoStyle = {
    margin: "7px",
  }
  return (
    <>
      <h1 style={{ marginLeft: "7px" }}>{props.title}</h1>
      <div className="d-flex justify-content-center">

        <div style={longPhotoStyle}>
          <PhotoMusic
            className="d-block w-100"
            width="250px"
            height="531px"
          />
        </div>
        <div className="container mb-5">
          <div className="row d-flex flex-wrap">
            <div><PhotoBox width="260px" height="260px" /></div>
            <div><PhotoBox width="260px" height="260px" /></div>
            <div><PhotoBox width="260px" height="260px" /></div>
            <div><PhotoBox width="260px" height="260px" /></div>
            <div><PhotoBox width="260px" height="260px" /></div>
            <div><PhotoBox width="260px" height="260px" /></div>
            <div><PhotoBox width="260px" height="260px" /></div>
            <div><PhotoBox width="260px" height="260px" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Desktop

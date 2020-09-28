import React from 'react'
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import PhotoBox from './PhotoBox';


export const BoxTwo = () => {
  return (
    <div>
      <NavigationOne />
      <div className="container mb-5">

        <div className="row">
          <div className="col">
            <p className="small-font">[ Box - 2 ]</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="100%" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="100%" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="100%" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="100%" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="100%" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="100%" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="100%" height="400px" />
          </div>
          <div className="col-lg-6 col-md-6">
            <PhotoBox width="100%" height="400px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxTwo;

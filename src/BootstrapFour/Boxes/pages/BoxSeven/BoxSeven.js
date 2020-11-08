import React from 'react'
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { cssclass } from '../../CssClass';
import PhotoBox from './PhotoBox';


export const BoxSeven = () => {
  return (
    <div className={cssclass.base_classname}>
      <NavigationOne />

      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <p className="small-font">[ Box - 7 ]</p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex f-wrap justify-content-center" style={{ flexWrap: "wrap" }}>
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxSeven;

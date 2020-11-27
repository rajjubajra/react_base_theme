import React from 'react'
import BoxTenDesktop from './BoxTenDesktop';
import BoxTenMobile from './BoxTenMobile';
import BoxTenTablet from './BoxTenTablet';


function BoxTen() {
  return (
    <>
      <div className="d-none d-lg-block d-xl-block">
        <div className="row">
          <BoxTenDesktop />

        </div>
      </div>
      <div className="d-none d-md-block d-lg-none">
        <div className="row">
          <BoxTenTablet />

        </div>
      </div>
      <div className="d-block d-md-none d-lg-none d-xl-none">
        <div className="row">
          <BoxTenMobile />

        </div>
      </div>
    </>
  )
}

export default BoxTen

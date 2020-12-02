import React from 'react'
import NavigationOne from '../../components/header/NavigationOne/NavigationOne'
import BoxTenDesktop from './BoxTenDesktop';
import BoxTenMobile from './BoxTenMobile';
import BoxTenTablet from './BoxTenTablet';


function BoxTen() {

  const image = "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/potery2.jpg";

  return (
    <div className='container'>
      <div className="row mb-5">
        <NavigationOne />
      </div>
      <hr />


      <div className="d-none d-lg-block d-xl-block">
        <div className="row">
          <BoxTenDesktop image={image} />
        </div>
      </div>
      <div className="d-none d-md-block d-lg-none">
        <div className="row">
          <BoxTenTablet image={image} />
        </div>
      </div>
      <div className="d-block d-md-none d-lg-none d-xl-none">
        <div className="row">
          <BoxTenMobile image={image} />
        </div>
      </div>
    </div>
  )
}

export default BoxTen

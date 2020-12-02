import React from 'react';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';


function HomeDesktop() {


  return (
    <div className="container mt-5" >

      <div style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} className="row big-nav">



        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <Link
            className='display-2 text-uppercase'
            to={`/${pagelink.product}/bread`}>Bread</Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <Link
            className='display-2 text-uppercase'
            to={`/${pagelink.product}/cake`}>Cake</Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <Link
            className='display-2 text-uppercase'
            to="#">Shop</Link>
        </div>

      </div>
    </div>

  )
}

export default HomeDesktop

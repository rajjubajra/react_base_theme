import React from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne'
import BoxElevenDesktop from './BoxElevenDesktop';
import BoxElevenTablet from './BoxElevenTablet';
import BoxElevenMobile from './BoxElevenMobile';



function BoxEleven() {

  const image = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/portait.png';
  const title = 'Mr Namayewa';
  const body = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quam iusto ratione ad sit, earum omnis eius culpa quaerat ut! Vel ducimus incidunt optio cum eaque eos laborum minima illum</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in quam nemo hic assumenda error, sed deserunt obcaecati expedita itaque incidunt ad perspiciatis! Illo exercitationem iste quia dolorem consequatur eos!</p>";


  const imageStyle = {
    maxWidth: "200px",
    height: "auto",
    paddding: "20px 20px 20px 0px",
    border: "1px solid #cccccc",
    marginRight: "20px"
  }


  return (
    <div className="container min-vh-100">
      <div className="row mb-5">
        <NavigationOne />
      </div>
      <hr />


      <div className="d-none d-lg-block d-xl-block p-5">
        <BoxElevenDesktop
          image={image}
          title={title}
          body={body}
          imageStyle={imageStyle}
        />
        <p className="small-font mt-5">desktop view</p>
      </div>


      <div className="d-none d-md-block d-lg-none d-xl-none">
        <BoxElevenTablet
          image={image}
          title={title}
          body={body}
          imageStyle={imageStyle}
        />
        <p className="small-font mt-5">tablet view</p>
      </div>


      <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
        <BoxElevenMobile
          image={image}
          title={title}
          body={body}
          imageStyle={imageStyle}
        />
        <p className="small-font mt-5">mobile view</p>
      </div>
    </div>
  )
}

export default BoxEleven

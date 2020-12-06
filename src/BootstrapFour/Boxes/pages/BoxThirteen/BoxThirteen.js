import React from 'react';
import "./BoxThirteen.scss";
import NavigationOne from '../../components/header/NavigationOne/NavigationOne'
import BoxThirteenDesktop from './BoxThirteenDesktop';
import BoxThirteenTablet from './BoxThirteenTablet';
import BoxThirteenMobile from './BoxThirteenMobile';




function BoxThirteen() {

  const image = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/portait.png';

  const title = 'Mr Namayewa';
  const body = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quam iusto ratione ad sit, earum omnis eius culpa quaerat ut! Vel ducimus incidunt optio cum eaque eos laborum minima illum</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in quam nemo hic assumenda error, sed deserunt obcaecati expedita itaque incidunt ad perspiciatis! Illo exercitationem iste quia dolorem consequatur eos!</p>";



  const imageStyle = {
    width: "200px",
    height: "200px",
    paddding: "20px 20px 20px 0px",
    marginRight: "20px",
    marginLeft: "0px",
  }


  return (
    <div className="container min-vh-100">
      <div className="row mb-5">
        <NavigationOne />
      </div>
      <hr />



      <div className="d-none d-lg-block d-xl-block p-5">
        <BoxThirteenDesktop
          image={image}
          title={title}
          body={body}
          imageStyle={imageStyle}
        />
        <p className="small-font mt-5">desktop view</p>
      </div>
      <div className="d-none d-md-block d-lg-none d-xl-none">
        <BoxThirteenTablet
          image={image}
          title={title}
          body={body}
          imageStyle={imageStyle}
        />
        <p className="small-font mt-5">tablet view</p>
      </div>
      <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
        <BoxThirteenMobile
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

export default BoxThirteen

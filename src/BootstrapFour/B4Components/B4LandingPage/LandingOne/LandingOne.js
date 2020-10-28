import React from 'react'
import TitleNNav from '../../B4Header/TitleNNav';
import Title from './Title';
import Text from './Text';
import Image from './Image';

function LandingOne() {
  return (
    <div className="container">
      <div className="row">
        <TitleNNav title={'Landing One'} href={"b4-landing-page"} />
      </div>
      <div className="row min-vh-100">
        <div className="col-lg-2"><Title /></div>
        <div className="col-lg-3"><Text /></div>
        <div className="col-lg-7"><Image /></div>
      </div>
    </div>
  )
}
export default LandingOne
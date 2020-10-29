import React from 'react'
import Title from './Title';
import Text from './Text';
import Image from './Image';

function LandingOne() {

  return (
    <div className="container-fluid mt-5 mb-5 min-vh-100">
      <div className="row justify-content-center">
        <Title />
        <Text />
        <Image />
      </div>
    </div>
  )
}
export default LandingOne
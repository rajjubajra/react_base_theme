import React from 'react'
import Title from './Title';
import Text from './Text';
import Image from './Image';

function LandingOne() {

  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row justify-content-center mr-5">
        <Title />
        <Text />
        <Image />
      </div>
    </div>
  )
}
export default LandingOne
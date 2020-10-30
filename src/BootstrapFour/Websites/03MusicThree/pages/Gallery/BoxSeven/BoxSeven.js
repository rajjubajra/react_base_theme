import React from 'react'
import Desktop from './Desktop'
import Tablet from './Tablet';
import Mobile from './Mobile';


export const BoxSeven = () => {

  const title = "Music";

  return (
    <>
      <div className="d-none d-lg-block d-xl-block">
        <div className="d-flex flex-column justify-content-center ml-5 mr-5">
          <Desktop title={title} />
        </div>
      </div>
      <div className="d-none d-md-block d-lg-none">
        <Tablet title={title} />
      </div>
      <div className="d-non">
        <Mobile title={title} />
      </div>


    </>
  )
}

export default BoxSeven;

import React from 'react'
import PhotoText from './PhotoText';
import TextPhoto from './TextPhoto';


export const BoxFour = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <section>
              <PhotoText />
            </section>
            <section>
              <TextPhoto />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxFour;

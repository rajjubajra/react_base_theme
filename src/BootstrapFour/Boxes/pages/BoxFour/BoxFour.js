import React from 'react'
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';

import PhotoText from './PhotoText';
import TextPhoto from './TextPhoto';

const styleLight = {
  width: "100%",
  height: "auto",
  background: "#ddd",
  border: "1px solid #ccc",
  margin: "20px 0px"
}
const styleDark = {
  width: "100%",
  height: "auto",
  background: "#000",
  border: "1px solid #ccc",
  margin: "20px 0px"
}

export const BoxFour = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <NavigationOne />

      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <p className="small-font">[ Box - 4 ]</p>
          </div>
        </div>
        <div className="row">
          <section>
            <PhotoText />
          </section>
          <section>
            <TextPhoto />
          </section>
          <section style={styleLight}>
            <PhotoText />
          </section>
          <section style={styleDark}>
            <PhotoText />
          </section>

          <section style={styleLight}>
            <TextPhoto />
          </section>
          <section style={styleDark}>
            <TextPhoto />
          </section>
        </div>
      </div>
    </div>
  )
}

export default BoxFour;

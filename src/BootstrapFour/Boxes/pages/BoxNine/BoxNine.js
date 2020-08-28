import React from 'react'
import CustomPlacehoder from './CustomPlaceholder';
import Nav from '../../components/header/Nav';

const textStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
}

function BoxNine() {
  return (
    <div>
      <Nav />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <CustomPlacehoder width="100%" height="100vh" />
          </div>
          <div className="col-lg-6" style={textStyle}>
            <h1>Ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore voluptatem harum natus impedit reprehenderit cupiditate laudantium sequi voluptate doloribus, cum cumque sapiente consequuntur nam provident expedita voluptatum! Vel, tenetur!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxNine

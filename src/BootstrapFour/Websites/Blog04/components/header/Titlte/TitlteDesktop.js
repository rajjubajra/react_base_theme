import React from 'react'


function TitlteDesktop(props) {


  return (
    <div style={props.mainDivStyle} className="d-flex justify-content-center">
      {/** TITLE  */}
      <h1 className="title">{props.title}</h1>
    </div>
  )
}

export default TitlteDesktop

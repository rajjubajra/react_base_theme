import React from 'react'

function HalfImageBlock(props) {


  const firstHalfStyle = {
    width: "100%",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#eee",
    padding: "0px 100px"
  }


  return (
    <div className="w-100">
      <div style={firstHalfStyle}>


        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique!</h1>
        <h3
          style={{ textAlign: "center", textDecoration: "underline" }}
          className="mt-5 align-center">Dniam, possimus repellat</h3>
      </div>
    </div>
  )
}

export default HalfImageBlock

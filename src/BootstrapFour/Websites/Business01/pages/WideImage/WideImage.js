import React from 'react'


function WideImage(props) {

  const blockStyle = {
    width: props.width ? props.width : "100%",
    height: props.height ? props.height : "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ddd",
  }

  return (
    <>
      {
        props.src
          ? <img src={props.src} alt={props.alt} />
          : <div style={blockStyle}>IMAGE - {props.alt}</div>
      }
    </>
  )
}

export default WideImage

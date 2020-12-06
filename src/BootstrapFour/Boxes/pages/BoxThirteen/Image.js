import React from 'react'

function Image(props) {

  const { image } = props;

  return (
    <img
      style={{
        width: "100%",
        maxWidth: "200px",
        height: "auto",
        borderRadius: "100px"
      }}
      src={image}
      alt="box-eleven"
    />
  )
}

export default Image

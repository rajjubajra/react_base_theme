import React from 'react'





function Text(props) {

  const textStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
  }

  function createMarkup(text) {
    return {
      __html: text
    };
  };

  console.log(props.data[0])

  return (
    <div style={textStyle}>
      <h1>{props.data[0].title}</h1>
      <div dangerouslySetInnerHTML={createMarkup(props.data[0].body)} />
    </div>
  )
}

export default Text

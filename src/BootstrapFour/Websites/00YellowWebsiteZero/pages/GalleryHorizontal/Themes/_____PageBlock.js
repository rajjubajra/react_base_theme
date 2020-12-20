import React from 'react';


function PageBlock(props) {

  const { title, image, text } = props;

  return (
    <div style={{
      width: "100vw",
      height: "85vh",
      overflow: "hidden",
      position: "relative"
    }}>

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{title}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img
              style={{ width: "100%", maxWidth: "300px" }}
              src={image}
              alt="test" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageBlock
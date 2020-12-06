import React from 'react';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';

function BoxElevenTablet(props) {

  const { image, title, body, imageStyle } = props;

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div style={imageStyle}>
          <img
            style={{ width: "100%", height: "auto" }}
            src={image}
            alt="box-eleven"
          />
        </div>
      </div>
      <div className="col-md-8">
        <h3>{title}</h3>
        <div>
          <DangerouslySetInnerHtml text={body} />
        </div>
      </div>
    </div>


  )
}

export default BoxElevenTablet

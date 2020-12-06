import React from 'react';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';
import Image from './Image';


function BoxTwelveTablet(props) {

  const { image, title, body, imageStyle } = props;

  return (
    <div className="row justify-content-center">
      <div className="col-11">
        <div style={imageStyle}>
          <Image image={image} />
        </div>
        <div className="row mt-3">
          <h3>{title}</h3>
          <div>
            <DangerouslySetInnerHtml text={body} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxTwelveTablet

import React from 'react';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';
import Image from './Image';

function BoxTwelveDesktop(props) {

  const { image, title, body, imageStyle } = props;

  return (
    <div className="row justify-content-center">

      <div className="col-lg-3">
        <div style={imageStyle}>
          <Image image={image} />
        </div>
      </div>

      <div className="col-lg-9">
        <h3>{title}</h3>
        <div>
          <DangerouslySetInnerHtml text={body} />
        </div>
      </div>

    </div>
  )
}

export default BoxTwelveDesktop

import React from 'react';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';
import Image from './Image';


function BoxThirteenTablet(props) {

  const { image, title, body, imageStyle } = props;

  return (
    <div className="row justify-content-center">

      <div className="col-10 mt-3">
        <div className="quote-unquote">
          <DangerouslySetInnerHtml text={body} />
        </div>
      </div>

      <div className="col-10">
        <div
          className="d-flex justify-content-center w-100"
          style={imageStyle}>
          <Image image={image} />
        </div>
        <div className="d-flex justify-content-center w-100 mt-4">
          <span className="title-hyphen"> - </span>
          <h3>{title}</h3>
        </div>
      </div>

    </div>
  )
}

export default BoxThirteenTablet

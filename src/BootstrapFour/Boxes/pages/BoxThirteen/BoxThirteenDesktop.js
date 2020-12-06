import React from 'react';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';
import Image from './Image';

function BoxThirteenDesktop(props) {

  const { image, title, body, imageStyle } = props;

  return (
    <div className="row justify-content-center">

      <div className="col-lg-3">
        <div style={imageStyle}>
          <Image image={image} />
        </div>
      </div>


      <div className="col-lg-9">

        <div className="quote-unquote">
          <DangerouslySetInnerHtml text={body} />
          <div className="d-flex">
            <span className="title-hyphen"> - </span>
            <h3>{title}</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BoxThirteenDesktop

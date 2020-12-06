import React from 'react';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';
import Image from './Image';



function BoxThirteenTablet(props) {

  const { image, title, body, imageStyle } = props;

  return (

    <div className="row justify-content-center">

      <div className="col-md-4">
        <div style={imageStyle}>
          <Image image={image} />
          <div className="d-flex justify-content-center mt-4">
            <span className="title-hyphen"> - </span>
            <h4>{title}</h4>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="quote-unquote">
          <DangerouslySetInnerHtml text={body} />
        </div>
      </div>

    </div>

  )
}

export default BoxThirteenTablet

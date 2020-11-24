import React from 'react';
import DangerouslySetInnerHtml from '../Utilities/DangerouslySetInnterHtml';


function FirstBlock(props) {

  const text = props.data.length > 0 && props.data[0].body.substring(0, 200);
  const textNext = props.data.length > 0 && props.data[0].body.substring(1000, 198);

  return (
    <div className="row">
      <div className="col">
        <div className="large-font">
          <DangerouslySetInnerHtml text={text} />
        </div>
        <div style={{ height: "100px" }}></div>
        <div className="medium-font">
          <DangerouslySetInnerHtml text={textNext} />
        </div>
      </div>
    </div>
  )
}

export default FirstBlock
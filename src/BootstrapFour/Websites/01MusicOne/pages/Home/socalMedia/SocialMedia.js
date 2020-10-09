import React from 'react';
import IconSvgYoutube from '../../../components/PhotoPlaceholder/IconSvgYoutube';
import IconSvgSpotify from '../../../components/PhotoPlaceholder/IconSvgSpotify';
import IconSvgApple from '../../../components/PhotoPlaceholder/IconSvgApple';
import IconSvgInstagram from '../../../components/PhotoPlaceholder/IconSvgInstagram';
import IconSvgTwitter from '../../../components/PhotoPlaceholder/IconSvgTwitter';

const sMediaStyle = {
  position: 'absolute',
  bottom: "10px"
}


function SocialMedia() {
  return (
    <div style={sMediaStyle} className="container">
      <div className="row">
        <div className="col d-flex">
          <IconSvgYoutube width="25px" height="auto" />
          <IconSvgSpotify width="25px" height="auto" />
          <IconSvgApple width="25px" height="auto" />
          <IconSvgInstagram width="25px" height="auto" />
          <IconSvgTwitter width="25px" height="auto" />
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
import React from 'react'

function IconSvgApplePay(props) {
  const imgStyle = {
    width: props.width,
    height: props.height,
    objectFit: "cover"
  }

  const url = "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/applepay.svg";

  return (
    <div>
      { /** if Photo has data populate Img Tag else View Custom blank placeholder */

        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          style={imgStyle}
          src={url}
          alt="Social Icon photo placeholder" />
      }
    </div>
  )
}

export default IconSvgApplePay
import React from 'react'

function Image() {

  const imageUrl = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_1.JPG';

  const imageAlt = 'Main';

  const imageStyleLG = {
    width: "100%",
    marginTop: "0%",
  }

  return (
    <>
      <div className="col-lg-7 d-none d-lg-block d-md-none" >
        <img style={imageStyleLG} src={imageUrl} alt={imageAlt} />
      </div>
      <div className="col-md-10 d-none d-md-block d-lg-none order-1">
        <img style={imageStyleLG} src={imageUrl} alt={imageAlt} />
      </div>
    </>
  )
}
export default Image
import React from 'react'

function Image() {

  const imageUrl = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_1.JPG';

  const imageAlt = 'Main';

  const imageStyleLG = {
    width: "94%",
    marginTop: "0%",
    marginRight: "5px"
  }
  const imageStyleMD = {
    width: "100%",
    marginTop: "0%",
    marginRight: "5px"
  }
  const imageStyleXSM = {
    display: "flex",
    width: "90%",
    margin: "0px auto"
  }

  return (
    <>
      <div className="col-lg-7 d-none d-lg-block d-md-none" >
        <img style={imageStyleLG} src={imageUrl} alt={imageAlt} />
      </div>
      {/** visible on md only */}
      <div className="col-md-10 d-none d-sm-block d-md-block d-lg-none order-first">
        <img style={imageStyleMD} src={imageUrl} alt={imageAlt} />
      </div>
      {/** visible on xs only */}
      <div className="col-xs-12  d-block d-sm-none">
        <img style={imageStyleXSM} src={imageUrl} alt={imageAlt} />
      </div>
    </>
  )
}
export default Image
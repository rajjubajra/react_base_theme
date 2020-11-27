import React from 'react';


function AboutusImage() {

  const image = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_2.JPG';
  return (
    <div className="aboutus-image d-flex justify-content-md-center">
      <img style={{ maxWidth: "200px", margin: "0px auto", paddingTop: "35%" }}
        src={image} alt="about-us" />
    </div>
  )
}

export default AboutusImage
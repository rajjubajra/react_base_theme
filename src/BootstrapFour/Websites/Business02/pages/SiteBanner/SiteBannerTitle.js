import React from 'react';
import Title from '../global/Title';
import SubTitle from '../global/SubTitle';
import Button from 'react-bootstrap/Button';




function SiteBannerTitle() {

  const styleSiteTitle = {
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div style={styleSiteTitle}>

      <h3 className="title-tex" style={{ animation: "fadeIn 2s" }}>
        Hello
      </h3>
      <div style={{
        animation: "fadeInScale 1s linear",
        animationDelay: "1s",
        animationFillMode: "both"
      }}>
        <Title title="I am a Plan" />
      </div>

      <div style={{
        animation: "fadeInScale 1s linear",
        animationDelay: "1.5s",
        animationFillMode: "both"
      }}>
        <SubTitle title="Plant of a house" />
      </div>

      <div className="site-buttons">
        <div style={{
          animation: "fadeIn 1s",
          animationFillMode: "both",
          animationDelay: "2s"
        }}
          className="d-flex flex-rw flex-wrap justify-content-center">
          <Button className="mr-1" variant="primary">Why me?</Button>
          <Button className="ml-1" variant="primary">Get Quote</Button>
        </div>
      </div>
    </div >
  )
}

export default SiteBannerTitle

import React from 'react';
import './NavigationEight.scss';
import NavigationDesktop from './NavigationDesktop';
import NavigationTablet from './NavigationTablet';
import NavigationMobile from './NavigationMobile';


const data = [
  {
    id: 1,
    name: "Home",
    link: "/b4-business-four"
  },
  {
    id: 2,
    name: "About",
    link: "/b4-business-four-about"
  },
  {
    id: 3,
    name: "Services",
    link: "/b4-business-four-services"
  },
  {
    id: 4,
    name: "Gallery",
    link: "/b4-business-four-gallery"
  },
  {
    id: 5,
    name: "Blog",
    link: "/b4-business-four-blog"
  },
  {
    id: 6,
    name: "Contact",
    link: "/b4-business-four-contact"
  }
]


const title = "Buzi-Four";
const signature = "by Yellowebsite";
const subTitleFontStyle = {
  fontFamily: "'Mrs Saint Delafield', cursive",
  letterSpacing: "0.2rem",
  fontWeight: "400",
  transform: "scaleY(1.5)"
}

function NavigationEight() {
  return (
    <div className="container-fluid navigation-eight">
      <div className="d-none d-lg-block d-xl-block">
        <NavigationDesktop
          data={data}
          title={title}
          signature={signature}
          subTitleFontStyle={subTitleFontStyle} />
      </div>

      <div className="d-none d-md-block d-lg-none d-xl-none">
        <NavigationTablet
          data={data}
          title={title}
          signature={signature}
          subTitleFontStyle={subTitleFontStyle} />
      </div>

      <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
        <NavigationMobile
          data={data}
          title={title}
          signature={signature}
          subTitleFontStyle={subTitleFontStyle} />
      </div>

    </div>
  )
}

export default NavigationEight

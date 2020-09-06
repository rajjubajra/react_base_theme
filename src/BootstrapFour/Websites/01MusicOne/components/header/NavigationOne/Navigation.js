import React from 'react';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';




function Navigation(props) {

  const linkStyle = {
    fontSize: "clamp(0.7rem, 5vw, 0.8rem)",
    color: "#000",
    letterSpace: "0.15rem",
    fontWeight: "300",
    textTransform: "uppercase",
    margin: "0px 10px",
    textDecoration: "none",
    listStyle: "none"
  }

  return (
    <>
      {/** MOBILE AND TABLET */}
      <NavMobile
        linkStyle={linkStyle}
        view={props.view}
        windowSizeSmall={props.windowSizeSmall}
        data={props.data}
      />
      {/** disktop */}
      <NavDesktop
        linkStyle={linkStyle}
        windowSizeSmall={props.windowSizeSmall}
        data={props.data}
      />
    </>
  )
}

export default Navigation

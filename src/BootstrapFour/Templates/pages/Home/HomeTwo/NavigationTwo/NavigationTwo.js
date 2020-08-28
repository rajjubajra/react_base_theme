import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './Navigation';
import NavIconThreeLines from './NavIconThreeLines';




const data = [
  {
    id: "1",
    name: "Home",
    link: "#"
  },
  {
    id: 2,
    name: "About",
    link: "#"
  },
  {
    id: 3,
    name: "Contact",
    link: "#"
  },
  {
    id: 4,
    name: "Sercives",
    link: "#"
  },
  {
    id: 5,
    name: "Back",
    link: "b4templates"
  }
]


export const NavigationTwo = () => {
  const [view, setView] = useState(true);

  return (
    <Container fluid>
      {/** navigation icon */}
      <div style={{ display: "relative", zIndex: "10" }}
        onClick={() => view ? setView(false) : setView(true)}>
        <NavIconThreeLines />
      </div>
      <div style={{
        position: "relative",
        transitionProperty: "top",
        transitionDuration: "3s",
        top: view ? 0 : -1000,
        width: "100%",
        height: "90vh",
        justifyContent: "center",
        display: "flex",
      }}>
        <Navigation data={data} />
      </div>
    </Container>
  )
}
export default NavigationTwo;
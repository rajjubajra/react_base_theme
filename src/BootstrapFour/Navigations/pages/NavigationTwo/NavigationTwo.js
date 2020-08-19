import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { cssclass } from '../../CssClass';
import Navigation from '../NavigationTwo/Navigation';
import NavIconThreeLines from './NavIconThreeLines';
import TitleNNav from '../../../B4Components/B4Header/TitleNNav';



const data = [
  {
    id: "1",
    name: "Link 1",
    link: "link-1"
  },
  {
    id: 2,
    name: "Link 2",
    link: "link-2"
  },
  {
    id: 3,
    name: "Link 3",
    link: "link-3"
  }
]


export const NavigationTwo = () => {
  const [view, setView] = useState(true);

  return (
    <div className={cssclass.base_classname}>
      <TitleNNav title={'Navigation 2'} href="/b4navigations" />
      <Container>
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
          background: "#eee",
          zIndex: "-1"
        }}>
          <Navigation data={data} />
        </div>
        <Row>
          <Col><h1>Navigation 2</h1></Col>
        </Row>
      </Container>
    </div >
  )
}
export default NavigationTwo;
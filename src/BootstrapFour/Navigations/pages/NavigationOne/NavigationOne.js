import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { cssclass } from '../../CssClass';
import Navigation from './Navigation';
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

export const NavigationOne = () => {

  const [windowSizeSmall, setWindowSizeSmall] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    window.onresize = function () {
      //console.log(window.innerWidth)
      window.innerWidth <= 768 ? setWindowSizeSmall(true) : setWindowSizeSmall(false);
    }
  })

  return (
    <div className={cssclass.base_classname}>
      <Container>
        <TitleNNav title={'Navigation 1'} href="/b4navigations" />
        {/** ICON FOR TABLET AND MOBILE */}
        <div
          className={`${windowSizeSmall ? '' : 'd-none'}`}
          onClick={() => view ? setView(false) : setView(true)}
        >
          <NavIconThreeLines />
        </div>

        {/** NAVIGATION MENU */}
        <Navigation data={data} windowSizeSmall={windowSizeSmall} view={view} />
        <Row className="mt-5">
          <Col><h1>Navigation 1</h1></Col>
        </Row>
      </Container>
    </div >
  )
}

export default NavigationOne;

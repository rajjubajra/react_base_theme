import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tool from './Tool';
import ToolsText from './ToolsText';
import { useInView } from 'react-intersection-observer';


import logo_drupal from '../../../../../images/Portfolio2020/logo_drupal_8.png';
import logo_bootstrap from '../../../../../images/Portfolio2020/logo_bootstrap.png';
import logo_javascript from '../../../../../images/Portfolio2020/logo_javascript.png';
import logo_php_mysql from '../../../../../images/Portfolio2020/logo_php_mysql.png';
import logo_react_js from '../../../../../images/Portfolio2020/logo_react_js.png';
import logo_react_bootstrap from '../../../../../images/Portfolio2020/logo_react_bootstrap.png';
import logo_redux from '../../../../../images/Portfolio2020/logo_redux.png';
import logo_sass from '../../../../../images/Portfolio2020/logo_sass.png';
import logo_html5 from '../../../../../images/Portfolio2020/logo_html5.png';

import Title from '../../pages/global/Title';


const data = [
  {
    id: 1,
    logo: logo_drupal,
    text: "Lorem ipsum dolor.",
    alt: "logo"
  },
  {
    id: 2,
    logo: logo_javascript,
    text: "A repellat iusto ea.",
    alt: "logo"
  },
  {
    id: 3,
    logo: logo_react_js,
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 4,
    logo: logo_redux,
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 5,
    logo: logo_react_bootstrap,
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 6,
    logo: logo_php_mysql,
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 7,
    logo: logo_html5,
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 8,
    logo: logo_sass,
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 9,
    logo: logo_bootstrap,
    text: "Ratione in est id",
    alt: "logo"
  },
]


function Tools() {
  const [refTool, refInView] = useInView({
    threshold: 0.3,
  });

  return (
    <div ref={refTool} className="tools mt-5">
      <div className="row justify-content-center">
        <Title title="Client" />
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-12 col-xl-7">
          <div className={`row ${refInView ? 'fade-in' : 'fade-out'}`}>
            {
              data.map((item, index) => {
                return <Tool key={index} logo={item.logo} alt={item.alt} text={item.text} />
              })
            }
          </div>
        </div>

        <div className="col-md-6 col-lg-6 col-xg-3">
          <div className="row mt-5">
            <div className={refInView ? 'fadeIn' : 'fadeOut'}>
              <ToolsText />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
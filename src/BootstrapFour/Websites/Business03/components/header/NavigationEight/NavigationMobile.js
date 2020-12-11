import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavIconThreeLines from './NavIconThreeLines';


function NavigationMobile(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const { title, signature, data } = props;

  const [view, setView] = useState(false);

  const navs = {
    position: "relative",
    top: view ? "0px" : "-400px",
    transition: "top 0.5s linear",
    background: variant === 'dark' ? "rgb(23 36 53)" : "#ffffff",
    width: "95%",
    zIndex: 0
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div onClick={() => view === false ? setView(true) : setView(false)}>
            <NavIconThreeLines />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-end">
            <div>
              <h3>{title}</h3>
              <p className="siganture-small">{signature}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <ul
          style={navs}
          className="mobile">
          {
            data.length > 0 &&
            data.map(item => {
              return <li className="link-item">
                <Link to={`/${item.link}`}>{item.name}</Link>
              </li>
            })
          }
        </ul>
      </div>

    </>
  )
}

export default NavigationMobile

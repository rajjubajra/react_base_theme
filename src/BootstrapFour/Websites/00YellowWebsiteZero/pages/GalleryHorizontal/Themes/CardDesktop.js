import React from 'react'
import { Link } from 'react-router-dom';
import Radium from 'radium';

function CardDesktop(props) {

  const lapTopStyle = {
    position: "relative",
    width: "100%",
    boxShadow: "1px 2px 7px 0px #ccc",
    outline: "1px solid #fff",
    outlineOffset: "-2px"
  }

  const btnView = {
    position: "absolute",
    bottom: "10px",
    color: "#333",
    fontWeight: "200",
    textTransform: "uppercase",
    letterSpacing: "12px",
    textDecoration: "none",

    /** DO NOT WORK DON'T KNOW WHY */
    ':hover': {
      letterSpacing: "15px",
    }

  }

  return (
    <div
      style={{
        border: "1px solid #999",
        padding: "30px",
        fontWeight: "100"
      }}
      className="container mt-5">
      <div className="row">
        <div
          style={{
            position: "relative",
            borderRight: "1px solid #999"
          }}
          className="col-lg-6 col-md-6 col-sm-10">
          <h2
            style={{ fontWeight: "200" }}
          >{props.title}</h2>
          <div>
            <div>
              <p>[ {props.text} ]</p>[ {props.type} ]
            </div>
          </div>
          <Link
            style={btnView}
            target="_blank"
            to={{
              pathname: `${props.linkref}`
            }}>Veiw</Link>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10s">
          <img
            style={lapTopStyle}
            src={props.bgImage} alt="background" />
        </div>
      </div>
    </div>
  )
}

export default Radium(CardDesktop)
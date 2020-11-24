import React from 'react'
import { Link } from 'react-router-dom';

function CardDesktop(props) {


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
            style={{
              position: "absolute",
              bottom: "10px",
              color: "#333",
              fontWeight: "200",
              textTransform: "uppercase",
              letterSpacing: "12px",
            }}
            target="_blank"
            to={`${props.linkref}`}>Preveiw</Link>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10s">
          <img
            style={{
              position: 'relative',
              width: "100%"
            }}
            src={props.bgImage} alt="background" />
        </div>
      </div>
    </div>
  )
}

export default CardDesktop

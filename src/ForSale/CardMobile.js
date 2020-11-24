import React from 'react'
import { Link } from 'react-router-dom';

function CardMobile(props) {


  return (
    <div
      style={{
        border: "1px solid #999",
        padding: "30px",
        fontWeight: "100"
      }}
      className="container mt-5">

      {/** IMAGE */}
      <div className="row">
        <div className="col-11">
          <img
            style={{
              position: 'relative',
              width: "100%"
            }}
            src={props.bgImage} alt="background" />
        </div>
      </div>

      {/** TEXT DETAIL */}
      <div className="row mt-3">
        <div
          style={{
            position: "relative",
            minHeight: "180px",
            borderTop: "1px solid #999",
            paddingTop: "20px"
          }}
          className="col-11">
          <h2 style={{ fontWeight: "200" }}>{props.title}</h2>
          <div>
            <div>
              <p>[ {props.text} ]</p>
            [ {props.type} ]
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
      </div>


    </div>

  )
}

export default CardMobile
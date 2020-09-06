import React from 'react';
import { Link } from 'react-router-dom';
import { pagelink } from '../../../PageLink';

const captionStyle = {
  color: "#000",
  background: "rgb(248, 249, 250, 0.21)",
  width: "100%",
  fontWeight: "100",
  letterSpacing: "0.02rem",
  marginTop: "5px",
}

const titleStyle = {
  fontSize: "1.2rem",
  fontWeight: "400"
}

const buttonStyle = {
  fontSize: "1rem",
  fontWeight: "100",
  color: "#333",
  textDecoration: "none",
  margin: "10px 0px",
  padding: "10px 20px",
  borderBottom: "1px solid #ccc"
}

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function Text(props) {
  const date = new Date();

  return (
    <section style={captionStyle}>
      <div>
        <p>Date: {date.getDate()} {month[date.getMonth()]}, {date.getFullYear()}</p>
      </div>

      <div style={titleStyle}>{props.title}</div>
      <p>{props.body}...</p>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-6 mt-4">
            <Link
              to={`${pagelink.readmore}/${props.id}`}
              className="button">Spotify</Link>
          </div>
          <div className="col-lg-3 col-md-3 col-6  mt-4">
            <Link
              to={`${pagelink.readmore}/${props.id}`}
              style={buttonStyle}>iTunes</Link>
          </div>
          <div className="col-lg-3 col-md-3 col-6  mt-4">
            <Link
              to={`${pagelink.readmore}/${props.id}`}
              style={buttonStyle}>Amazon</Link>
          </div>
          <div className="col-lg-3 col-md-3 col-6  mt-4">
            <Link
              to={`${pagelink.readmore}/${props.id}`}
              style={buttonStyle}>Deezer</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center mt-4">
            <Link
              to={`${pagelink.readmore}/${props.id}`}
              style={buttonStyle}>Play</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Text

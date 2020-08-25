import React from 'react';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';

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
  padding: "10px 20px",
  borderBottom: "1px solid #999",
  textDecoration: "none"
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
      <Link
        to={`${pagelink.readmoreFour}/${props.id}`}
        style={buttonStyle}>read more</Link>
    </section>
  )
}

export default Text

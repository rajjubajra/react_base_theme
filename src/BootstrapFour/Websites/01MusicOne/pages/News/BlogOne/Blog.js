import React from 'react';
import { Link } from 'react-router-dom';
import { pagelink } from '../../../PageLink';

const sectionStyle = {
  width: "100%",
  textAlign: "center",
  margin: "150px 0px"
}

const dateStyle = {
  fontSize: "0.9rem",
  fontWeight: "100",
  letterSpacing: "0.05rem"
}

const titleStyle = {
  textTransform: "capitalize",
  fontWeight: "200",
  margin: "20px 0px"
}

const buttonStyle = {
  fontWeight: "100",
  letterSpacing: "0.1rem",
  padding: "0px 20px 10px 20px",
  borderBottom: "1px solid #ccc",
  textDecoration: "none",
  color: "#333",
  cursor: "pointer"
}


const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function Blog(props) {

  const { id, title, body, date, nid } = props;

  let dt = new Date(date);
  let formated_date = `${dt.getDate()} ${month[dt.getMonth()]} ,${dt.getFullYear()}`

  let text = body;

  function createMarkup(txt) {
    return {
      __html: txt
    };
  };


  return (
    <section style={sectionStyle}>
      <p>{id}</p>
      <p style={dateStyle}>{formated_date}</p>
      <h1 style={titleStyle} >{title}</h1>
      <div style={{ width: "65%", margin: "0px auto" }}>
        <div dangerouslySetInnerHTML={createMarkup(text.substring(0, 150))} />
      </div>

      <Link
        to={`/${pagelink.newsReadMore}/${nid}`}
        style={buttonStyle}>
        Read More
      </Link>
    </section>
  )

}
export default Blog
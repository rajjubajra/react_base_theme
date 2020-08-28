import React from 'react';
import { Link } from 'react-router-dom';

const ulStyle = {
  listStyle: "none",
  width: "100%",
  height: "90vh",
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
  fontWeight: "200",
  letterSpacing: "0.1rem",
  lineHeight: "3.5rem",
  fontSize: "0.9rem",
  textTransform: "uppercase"

}

const linkStyle = {
  textDecoration: "none",
  margin: "5px 0px",
  color: "#000"
}

function Navigation(props) {
  return (
    <ul style={ulStyle} className="justify-content-center flex-column" >
      {
        props.data.map(item => {
          return <li>
            <Link style={linkStyle} to={item.link}>{item.name}</Link>
          </li>
        })
      }
    </ul>
  )
}
export default Navigation
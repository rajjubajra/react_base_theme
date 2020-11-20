import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  width: "100%",
  marginTop: "10px",
  textAlign: "center",
  color: "#666",
  fontSize: "0.85rem"
}

const linkStyle = {
  margin: "0px 5px",
  color: "#999"
}

const CopyRightFooter = () => {


  return (
    <>
      <div style={style}>
        <p>
          &copy; {new Date().getFullYear()}
          All Right Reserved | Desinged and developed by
          <a style={linkStyle} href="http://yellow-website.com"  >
            Yellow-Website.com</a>
          <Link style={linkStyle} to="/">
            +</Link>
          <a style={linkStyle} href="https://yellow-website.com/d8-react-base-theme-backend/user/login">
            Login</a>
          <Link style={linkStyle} to="/websites-bootstrap">.
            </Link>
        </p>
      </div>
    </>
  )
}

export default CopyRightFooter

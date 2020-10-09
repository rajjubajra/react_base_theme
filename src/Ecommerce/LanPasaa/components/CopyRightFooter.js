import React from 'react'
import { Link } from 'react-router-dom'



const CopyRightFooter = () => {

  const copyrightStyle = {
    fontSize: "11px",
    textAlign: "center",
    fontFamily: "sans-serif",
    letterSpacing: "1px",
    color: "#000"
  }
  const stylehRef = {
    color: "#000",
    textDecoration: "none"
  }
  return (
    <>
      <div style={copyrightStyle}>
        <p>
          &copy; {new Date().getFullYear()}
          All Right Reserved | Desinged and developed by
          <a style={stylehRef} href="http://yellow-website.com"  >Yellow-Website.com</a>
        </p>
      </div>
    </>
  )
}

export default CopyRightFooter

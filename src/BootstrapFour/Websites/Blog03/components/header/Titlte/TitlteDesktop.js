import React from 'react'
import { pagelink } from '../../../PageLink';
import { Link } from 'react-router-dom'

function TitlteDesktop(props) {
  const iconStyle = {
    width: "20px",
    height: "20px",
    margin: "25px 10px",
    display: props.hideLink ? "none" : "absolute",
    top: "0px"
  }


  return (
    <div style={props.mainDivStyle} className="d-flex justify-content-center">
      {/** TITLE  */}
      <h1 className="display-1">{props.title}</h1>

      {/** Navigate to Search Page */}
      <Link to={`/${pagelink.search}`}>
        <img style={iconStyle} src={props.searchIcon} alt="search" />
      </Link>
    </div>
  )
}

export default TitlteDesktop
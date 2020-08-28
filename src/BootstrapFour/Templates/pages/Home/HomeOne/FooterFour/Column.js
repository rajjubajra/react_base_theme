import React from 'react';
import { Link } from 'react-router-dom';


const ulStyle = {
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  fontWeight: "100",
  fontSize: "0.9rem",
  lineHeight: "1.5rem",
  paddingInlineStart: "0px",
}
const linkStyle = {
  margin: "0px 10px",
  listStyle: "none",
  fontWeight: "100",
  letterSpacing: "0.1rem"
}

const ulStyleMobile = {
  display: "flex",
  flexDirection: "Column",
  alignItems: "center"
}


function Column(props) {
  return (
    <>
      {/** Desktop and tablets */}
      <div className="d-none d-sm-block">
        <ul style={ulStyle}>
          {
            props.data.map(item => {
              return <li key={item.id} style={linkStyle}><Link to={item.nav}>{item.name}</Link></li>
            })
          }
        </ul>
      </div>
      {/** Mobile device */}
      <div className="d-block d-sm-none">
        <ul style={ulStyleMobile}>
          {
            props.data.map(item => {
              return <li key={item.id} style={linkStyle}><Link to={item.nav}>{item.name}</Link></li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Column

import React from 'react';
import SocialMedia from '../components/SocialMedia/SocialMedia';


const blockStyle = {
  width: "100%",
  height: "40vh",
  objectFit: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_5.JPG')",
  color: "#eeee",
}

// const pageStyle = {
//   position: "absolute",
//   top: "44px"
// }

export default function Home() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div style={blockStyle}>
            <h1 className="display-1">Lorem ipsum dolor,</h1>
            <h2>consectetur adipisicin</h2>
          </div>
          <div style={{
            position: "absolute",
            bottom: "20px",
            width: "100%"
          }}>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div >
  )
}

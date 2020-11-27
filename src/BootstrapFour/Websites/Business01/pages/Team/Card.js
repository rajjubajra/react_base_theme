import React from 'react'




function Card(props) {


  return (
    <div className="card" style={{ width: "100%", margin: "20px 5px" }}>
      <img
        src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_3.JPG"
        className="card-img-top"
        alt="..." />
      <div className="card-body">
        <h5 className="card-title">Member's Name</h5>
        <p className="card-text">Position</p>
      </div>
    </div>
  )
}

export default Card

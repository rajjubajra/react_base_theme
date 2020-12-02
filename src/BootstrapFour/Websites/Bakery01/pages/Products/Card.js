import React from 'react'


function Card(props) {

  const image = props.image ? props.image : "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/DSC_2379_0.jpeg";

  const cardStyle = {
    width: "18rem",
    margin: "10px 0px",
    border: "none"
  }
  const textStyle = {
    letterSpacing: "0.11rem",
  }

  return (
    <div className="card" style={cardStyle}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title text-uppercase text-center mb-2">
          - {props.name} -
        </h4>
        <p style={textStyle} className="card-text text-center">{props.ingredients}</p>
        <p className="text-center">{props.rate}</p>
      </div>
    </div>
  )
}

export default Card

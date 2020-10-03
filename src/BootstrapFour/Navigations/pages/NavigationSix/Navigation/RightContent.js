import React from 'react'
import { Link } from 'react-router-dom';

function RightContent() {
  return (
    <>
      <div className="list-group">
        <h1><Link className="bold list-group-item list-group-item-action" to="#">
          Menu</Link>
        </h1>
        <h1><Link className="bold list-group-item list-group-item-action" to="#">
          Online Order</Link>
        </h1>
        <h1><Link className="bold list-group-item list-group-item-action" to="#">
          Catering</Link></h1>
        <h1><Link className="bold list-group-item list-group-item-action" to="#">Out Team</Link></h1>
        <h1><Link className="bold list-group-item list-group-item-action" to="#">Nutrition info</Link></h1>
      </div>
      <div className="list-group">
        <h4><Link className="list-group-item list-group-item-action" to="#">
          Location</Link></h4>
        <h4><Link className="list-group-item list-group-item-action" to="#">
          Reviews</Link> </h4>
        <h4><Link className="list-group-item list-group-item-action" to="#">
          Food Source</Link></h4>
        <h4><Link className="list-group-item list-group-item-action" to="#">
          Contact</Link></h4>
        <h4><Link className="list-group-item list-group-item-action" to="#">
          Social Media</Link></h4>
      </div>
    </>
  )
}

export default RightContent

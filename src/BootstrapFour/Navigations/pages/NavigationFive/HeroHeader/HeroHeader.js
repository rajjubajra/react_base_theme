import React from 'react'
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic'

function HeroHeader() {
  return (
    <div style={{ position: "relative", zIndex: "10" }} className="container-fluid">
      <div className="row">
        <div class="card bg-dark text-white">
          <PhotoMusic width="100%" height="400px" />
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroHeader
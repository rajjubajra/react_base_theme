import React from 'react';
import './Gallery.scss';
//import ForSale from './Gallery/ForSale';



function Gallery() {
  return (
    <div className="yellow-website-zero">
      <div class="horizontal-scroll-wrapper">
        <div className="wrapper" style={{ width: "calc(100vw * 8)" }}>
          <div><p>Item 1  - [ Horizontal Scoll ]</p></div>
          <div><p>item 2 - [test text]</p></div>
          <div><p>Item 3</p></div>
          <div><p>Item 4</p></div>
          <div><p>Item 5</p></div>
          <div><p>Item 6</p></div>
          <div><p>Item 7</p></div>
          <div><p>Item 8</p></div>
        </div>
      </div>
    </div>
  )
}

export default Gallery

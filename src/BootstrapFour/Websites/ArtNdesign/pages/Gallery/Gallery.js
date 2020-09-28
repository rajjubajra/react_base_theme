import React from 'react';
import './Gallery.scss';



function Gallery() {
  return (
    <div class="horizontal-scroll-wrapper">
      <div className="wrapper" style={{ width: "calc(100vw * 8)" }}>
        <div><p>Item 1  - [ Horizontal Scoll ]</p></div>
        <div><p>Item 2</p></div>
        <div><p>Item 3</p></div>
        <div><p>Item 4</p></div>
        <div><p>Item 5</p></div>
        <div><p>Item 6</p></div>
        <div><p>Item 7</p></div>
        <div><p>Item 8</p></div>
      </div>
    </div>
  )
}

export default Gallery

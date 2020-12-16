import React from 'react';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';

function RepsNavIcon() {
  return (
    <div style={{
      position: "fixed",
      zIndex: "50",
      top: "300px",
      right: "-43px",
      transform: "rotate(90deg)",
      background: "#cccccc",
      padding: "0px 2px"
    }}>
      <Link to={`${pagelink.responsiveView}`}>Responsive View</Link>
    </div>
  )
}

export default RepsNavIcon

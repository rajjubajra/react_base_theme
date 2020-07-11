import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      flexDirection: "column"
    }}>
      <div>
        <Spinner animation="border" />
      </div>
      <div className="mt-1">
        Loading...
      </div>



    </div>
  )
}

export default Loading

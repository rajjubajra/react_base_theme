import React from 'react';


const styleForm = {
  width: "98.5%",
  height: "150px",
  margin: "0px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "1px solid #eee",
}

function SearchForm() {


  return (

    <form style={styleForm}>

      <div style={{ display: "flex", width: "100%" }}>

        <input
          autoFocus
          style={{
            width: "100%",
            outline: "none",
            border: "none",
            padding: "0px 20px"
          }}
          type="text"
          name="search" />
        <button className="btn">Search</button>
      </div>

    </form>

  )
}

export default SearchForm

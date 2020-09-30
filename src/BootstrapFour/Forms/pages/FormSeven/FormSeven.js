import React from 'react'
import Nav from '../../components/header/Nav';

function FormSeven() {
  return (
    <div className="container">
      <Nav />
      <p>[ form - 1]</p>
      <div className="row">
        <div className="col">
          <form className="form-inline mt-5 mb-5">
            <input
              style={{ width: "84%" }}
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Search" />
            <button type="submit" class="btn btn-light mb-2">Search</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default FormSeven

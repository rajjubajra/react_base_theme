import React from 'react';
import { country } from './country.json';

function Form() {
  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="name" />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="email address" />
      </div>
      <div className="form-group">
        <label>State</label>
        <input type="text" className="form-control" placeholder="State" />
      </div>
      <div className="form-group">
        <label>Country</label>
        <select multiple className="form-control" id="exampleFormControlSelect2">
          {
            country.map((item, index) => {
              return <option key={index}>{item.name}</option>
            })
          }
        </select>
        <button type="submit" className="btn btn-light mb-2 mt-3">Submit</button>
      </div>
    </form>
  )
}

export default Form

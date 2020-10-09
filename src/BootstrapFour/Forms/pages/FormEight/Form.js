import React from 'react';
import { country } from '../../data/country.json';

function Form() {
  return (
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" placeholder="name" />
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" placeholder="email address" />
      </div>
      <div class="form-group">
        <label>State</label>
        <input type="text" class="form-control" placeholder="State" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Country</label>
        <select multiple class="form-control" id="exampleFormControlSelect2">
          {
            country.map(item => {
              return <option>{item.name}</option>
            })
          }
        </select>
        <button type="submit" class="btn btn-light mb-2 mt-3">Submit</button>
      </div>
    </form>
  )
}

export default Form

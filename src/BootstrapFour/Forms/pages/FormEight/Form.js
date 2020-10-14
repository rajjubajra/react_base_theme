import React, { useState, useEffect } from 'react';
import { countryList } from '../../data/country.json';
import axios from 'axios';

function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [submited, setSubmited] = useState(false);

  //console.log(name, email, state, country);

  const baseUrl = `https://yellow-website.com/d8-react-base-theme-backend`;
  const formId = 'fans_club';


  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, state, country);
    axios(
      {
        method: 'post',
        url: `${baseUrl}/webform_rest/submit?_format=json`,
        // withCredentials: true,
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/json',
          /** auth token for same domain name submit via cookies  */
          'X-CSRF-Token': `${baseUrl}/rest/session/token`
        },
        data: {
          "webform_id": formId,
          "name": name,
          "email": email,
          "state": state,
          "country": country
        }
      },
    )
      .then(function (res) {
        console.log("Post Status", res.status);
        res.status === 200 ? setSubmited(true) : setSubmited(false);
      })
      .catch(function (err) {
        console.log("Post Error message:", err)
      });
    console.log("DATA submited", submited);


    axios({
      method: 'GET',
      url: `${baseUrl}/webform/${formId}?_format=json`,
      withCredentials: true,
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/json',
        /** auth token for same domain name submit via cookies  */
        'X-CSRF-Token': `${baseUrl}/rest/session/token`
      }
    })
      .then(function (response) {
        return console.log("WEBFORM GET", response);
      })
      .catch(function (err) {
        console.log("web form GET error", err);
      })
    console.log("GET SUBMITED")

    /** submited get closed */
  }




  return (
    <>
      <div className={`${submited ? 'd-block' : 'd-none'}`}>
        <div className="card">
          <h5 className="card-header">Message</h5>
          <div className="card-body">
            <h5 className="card-title">Message Submited</h5>
            <p className="card-text">Thank you. your message has been submited</p>
            <span className="btn btn-light">Back</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={`${submited ? 'd-none' : 'd-block'}`}>
        <div className="form-group">
          <label>Name</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            required
            type="email"
            className="form-control"
            placeholder="email address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="State"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <select multiple={true}
            required
            className="form-control"
            name="country"
            value={[country]}
            onChange={(e) => setCountry(e.target.value)}
          >
            {
              countryList.map((item, index) => {
                return <option key={index}>{item.name}</option>
              })
            }
          </select>
          <input type="submit" className="btn btn-light mb-2 mt-3" value="Submit" />
        </div>
      </form>
    </>
  )
}

export default Form

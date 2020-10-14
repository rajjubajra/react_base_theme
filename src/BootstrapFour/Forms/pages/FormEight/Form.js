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

  /** d8-react-base-theeme-backend webform "Contact Form" rest api uri */
  const formUrl = 'https://yellow-website.com/d8-react-base-theme-backend/webform_rest/submit?_format=json';

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, state, country);
    axios(
      {
        method: 'post',
        url: formUrl,
        withCredentials: true,
        headers: {
          'contetn-type': 'application/hal+json',
          /** auth token for same domain name submit via cookies  */
          'XSRF-TOKEN': 'https://yellow-website.com/d8-react-base-theme-backend/rest/session/token'
        },
        data: {
          "webform_id": "fans_club",
          "name": name,
          "email": email,
          "state": state,
          "country": country
        }
      },
    )
      .then(function (res) {
        console.log("form res", res, "Status", res.status);
        res.status === 200 ? setSubmited(true) : setSubmited(false);
      })
      .catch(function (err) {
        console.log("form err", err)
      });
    console.log("DATA submited", submited);
  }




  return (
    <form onSubmit={handleSubmit}>
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
  )
}

export default Form

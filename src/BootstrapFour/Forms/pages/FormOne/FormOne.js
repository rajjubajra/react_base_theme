import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../../components/header/Nav';
import Form from './Form';


/** D8WebForm */
function FormOne() {

  /** axios response.status = 200, submited set to true */
  const [submited, setSubmited] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const baseUrl = `https://yellow-website.com/d8-react-base-theme-backend`;
  const formId = 'contact_message?_format=json';


  console.log("???", name, email, message);

  const handleSubmit = () => {
    console.log("HANDLE SUBMIT", name, email, message, submited);
    axios.post(`${baseUrl}/${formId}`,
      {
        "contact_form": [{ "target_id": "contact_form" }],
        "name": [{ "value": name }],
        "email": [{ "value": email }],
        "message": [{ "value": message }]
      },
      {
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/json',
          /** auth token for same domain name submit via cookies  */
          'X-CSRF-Token': `${baseUrl}/rest/session/token`
        }
      }
    )
      .then(function (res) {
        console.log("form res", res, "Status", res.status);
        res.status === 200 ? setSubmited(true) : setSubmited(false);
      })
      .catch(function (err) {
        console.log("form err", err)
      });

  }

  //console.log(watch("email"));


  return (
    <div className="container mb-5">
      <Nav />
      <p>[ form - 1]</p>
      <div className="row mb-5 mt-5 d-flex justify-content-lg-center">

        <div className="col-9">
          <h3>Contact Form</h3>
          <p className={`${submited ? '' : 'd-none'}`}>Thank you. Messaged submited.</p>
        </div>

      </div>
      <div className={`row 
                        ${submited ? 'd-none' : ''} 
                        justify-content-center`}>

        <div className="col-lg-9">
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                className="form-control"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-light">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default FormOne
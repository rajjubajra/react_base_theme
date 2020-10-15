import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';
import Nav from '../../components/header/Nav';


function FormEight() {


  /** d8-react-base-theeme-backend webform "Contact Form" rest api uri */
  // const formUrl = 'https://yellow-website.com/d8-react-base-theme-backend/webform_rest/submit?_format=json';


  // const onSubmit = (data) => {
  //   axios.post(formUrl, {
  //     "webform_id": "fans_club",
  //     "name": data.name,
  //     "email": data.email,
  //     "state": data.state,
  //     "country": data.country
  //   },
  //     {
  //       headers: {
  //         'contetn-type': 'application/json',
  //         /** auth token for same domain name submit via cookies  */
  //         'csrf_token': 'https://yellow-website.com/d8-react-base-theme-backend/rest/session/token'
  //       }
  //     }
  //   )
  //     .then(function (res) {
  //       console.log("form res", res, "Status", res.status);
  //       res.status === 200 ? setSubmited(true) : setSubmited(false);
  //     })
  //     .catch(function (err) {
  //       console.log("form err", err)
  //     });
  //   console.log("DATA", data);
  // }

  // console.log(watch("email"));

  return (
    <div className="container min-vh-100">
      <Nav />
      <p>[ form - 8]</p>
      <div className="row justify-content-center">
        <div className="col-8">
          <h1>Fans Club</h1>
          <Form />
        </div>
      </div>
    </div>
  )
}
export default FormEight
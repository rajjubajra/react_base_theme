import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from './Form';


/** D8WebForm */
function FormOne() {

  /** axios response.status = 200, submited set to true */
  const [submited, setSubmited] = useState(false);

  /** react-hook-form  elements */
  const { register, handleSubmit, watch, errors } = useForm();

  /** d8-react-base-theeme-backend webform "Contact Form" rest api uri */
  const formUrl = 'https://yellow-website.com/d8-react-base-theme-backend/webform_rest/submit?_format=json';



  const onSubmit = (data) => {
    axios.post(formUrl, {
      "webform_id": "contact_form",
      "name": data.name,
      "email": data.email,
      "message": data.message
    },
      {
        headers: {
          'contetn-type': 'application/json',
          /** auth token for same domain name submit via cookies  */
          'csrf_token': 'https://yellow-website.com/d8-react-base-theme-backend/rest/session/token'
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
    console.log("DATA", data);
  }

  //console.log(watch("email"));


  return (
    <div className="container mb-5">

      <div className="row mb-5 mt-5 d-flex justify-content-lg-center">

        <div className="col-9">

          <p className={`${submited ? '' : 'd-none'}`}>Thank you. Messaged submited.</p>
        </div>

      </div>
      <div className={`row 
                        ${submited ? 'd-none' : ''} 
                        justify-content-center`}>

        <div className="col-lg-9">
          <Form
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            errors={errors}
          />
        </div>
      </div>
    </div>
  )
}

export default FormOne
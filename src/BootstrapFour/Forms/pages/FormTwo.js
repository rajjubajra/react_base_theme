import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Nav from '../components/header/Nav';



const FormFour = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    try {
      axios.post('http://yellow-website.com/d8-react-base-theme-backend/entity/contact_message', {
        email: data.email,
        password: data.password
      }).then(res => console.log(res))
    } catch (e) {
      console.log(e);
    }
  }

  //console.log(watch("email"));

  return (
    <div className="container">
      <Nav />
      <div className="row">
        <div className="col-3">
          <h1>Contact Form</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <form onSubmit={handleSubmit(onSubmit)}>


            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                ref={register({ required: true })}
              />
              {errors.name && <p className="small-font">Required field</p>}
            </div>

            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                ref={register({ required: true })} />
              {errors.email && <p className="small-font">this is required field</p>}
            </div>


            <div className="form-group">
              <label htmlFor="Email">Message</label>
              <textarea
                className="form-control"
                name="message"
                ref={register({ required: true })} ></textarea>
              {errors.message && <p className="small-font">this is required field</p>}
            </div>



            <div className="form-group">
              <button type="submit" className="btn btn-light" >Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default FormFour

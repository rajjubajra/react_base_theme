import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const FormFour = () => {

  const { register, handleSubmit, watch, errors } = useForm();


  const onSubmit = data => {
    try {
      axios.post('https://reqres.in/api/users', {
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
      <div className="row mb-5">
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <h4>Login:</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id=""
                ref={register({ required: true })} />
              {errors.email && <p className="small-font">this is required field</p>}
            </div>

            <div className="form-group">
              <label htmlFor="name">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id=""
                ref={register({ required: true })}
              />
              {errors.password && <p className="small-font">Required field</p>}
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

import React from 'react';
import Form from './Form';
import Nav from '../../components/header/Nav';


function FormEight() {


  return (
    <div className="container">
      <Nav />
      <p>[ form - 8]</p>
      <div className="row justify-content-center">
        <div className="col-8">
          <h1>Fans Club</h1>
          <p>Please fill out the form below to join Fan Club</p>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default FormEight

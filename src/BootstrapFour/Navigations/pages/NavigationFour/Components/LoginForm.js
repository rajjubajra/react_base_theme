import React from 'react'
import IconClose from './IconClose'

const styleForm = {
  width: "98.5%",
  height: "150px",
  margin: "0px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //outline: "1px solid #eee",
}

const inputStyle = {
  width: "50%",
  padding: "0px 20px",
}


const labelStyle = {
  display: "flex"
}
function LoginForm(props) {
  return (
    <div>
      <div onClick={() => props.hideView('base:my-account')} className="d-flex justify-content-end hide-in-mobile">
        <IconClose />
      </div>

      <form style={styleForm}>

        <div
          className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <label style={labelStyle}>Name</label>
              <input
                style={inputStyle}
                type="text"
                name="name"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <label style={labelStyle}>Password</label>
              <input
                style={inputStyle}
                type="password"
                name="password"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <button className="btn btn-light">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
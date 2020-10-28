import React from 'react'



const bigFont = {
  fontSize: "2rem",
  letterSpacing: "0.2rem",
  listStyle: "none"
}

function EmailNTel() {
  return (

    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card mt-5 mb-5">
            <div className="card-body">
              <div className="card-text">
                <div className="d-flex justify-content-between">
                  <ul style={bigFont} className="d-none d-lg-block d-md-block">
                    <li style={{
                      padding: "20px 30px 20px 30px",
                      borderBottom: "1px solid #ccc"
                    }}>YW Music Two</li>
                  </ul>
                  <ul style={bigFont}>
                    <li>email@example.com</li>
                    <li>(444) 5555-5555</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-5"></div>
        </div>
      </div>
    </div>
  )
}
export default EmailNTel
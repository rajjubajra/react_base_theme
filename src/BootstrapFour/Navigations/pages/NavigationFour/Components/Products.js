import React from 'react';
import PhotoFood from '../../../components/PhotoPlaceholder/PhotoFood';
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';



function Products(props) {


  const blockStyle = {
    padding: "20px 0px",
    textAlign: "center"
  }

  const boxStyle = {
    width: "100%",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #eee",
    padding: "10px",
  }







  return (
    <div className='product-in' style={blockStyle} >
      <div className="row">
        <div className="col-lg-3 col-sm-6 mb-2">
          <div style={boxStyle}>
            {
              props.prd === 'new' && <PhotoMusic width="100%" height="280px" />
            }
            {
              props.prd === 'collection' && <PhotoFood width="100%" height="280px" />
            }
            <p>Psum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="col-lg-3  col-sm-6 mb-2">
          <div style={boxStyle}>
            {
              props.prd === 'new' && <PhotoMusic width="100%" height="280px" />
            }
            {
              props.prd === 'collection' && <PhotoFood width="100%" height="280px" />
            }
            <p>Isit amet consectetur adipisicing psum dolor </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-2">
          <div style={boxStyle}>
            {
              props.prd === 'new' && <PhotoMusic width="100%" height="280px" />
            }
            {
              props.prd === 'collection' && <PhotoFood width="100%" height="280px" />
            }
            <p>Onsecteturipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-2">
          <div style={boxStyle}>
            {
              props.prd === 'new' && <PhotoMusic width="100%" height="280px" />
            }
            {
              props.prd === 'collection' && <PhotoFood width="100%" height="280px" />
            }
            <p>Dolor sit amet ipsumconsectetur adipisicing</p>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Products

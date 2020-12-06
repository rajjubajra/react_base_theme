import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {

  const { title, rate, period, product, link } = props;
  return (

    <div className="card" style={{ width: "18rem", margin: "10px" }}>

      <div className="card-body" >
        {/** price  */}
        <div className="text-center px-5">
          <h3 className="card-title">{title}</h3>
          <h1>{rate}</h1>
          <h3> {period} </h3>
        </div>
        {/** Products */}
        <div>
          <ul style={{
            listStyle: "none",
            lineHeight: "2.0rem",
            margin: "50px 0px"
          }}>
            {product.length > 0 &&
              product.map(item => {
                return item.status === 'active' &&
                  <li>{item.name}</li>
              })
            }
          </ul>
        </div>
        <div className='text-center'>
          <Link to={`/${link}`}
            className="btn btn-light border">
            Start now</Link>
        </div>
      </div>
    </div>


  )
}

export default Card

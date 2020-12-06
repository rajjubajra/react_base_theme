import React from 'react';
import { Link } from 'react-router-dom';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';


function Card(props) {

  const styleIcon = {
    padding: "10px",
    border: "1px solid #ccc",
    width: "60px",
    height: "60px",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "-30px",
    background: "#ffffff"
  }

  const { icon, title, text, link } = props;
  return (

    <div className="card" style={{ width: "20rem", margin: "10px" }}>
      <div className="d-flex justify-content-center w-100">
        <div style={styleIcon}>{icon}</div>
      </div>

      <div className="card-body" >
        {/** price  */}
        <div className="text-center px-5">
          <h4 className="card-title">{title}</h4>
        </div>
        {/** Products */}
        <div>
          <DangerouslySetInnerHtml text={text} />
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

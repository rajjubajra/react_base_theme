import React from 'react';
import { useDispatch } from 'react-redux';
import { actionFetchCategory } from '../../actions/actionFetchCategory';


function Card(props) {

  const dispatch = useDispatch();

  const { id, imageUrl, alt, title, brief_text, footer, imgWidth, imgHeight } = props;

  const imgStyle = {
    width: imgWidth,
    height: imgHeight,
    objectFit: "cover",
    margin: "10px"
  }

  return (
    <div style={{ position: "relative" }}
      onClick={() => dispatch(actionFetchCategory(id))}>
      <img style={imgStyle} className="card-img" src={imageUrl} alt={alt} />
      <div className="card-img-overlay">
        <div className="card-img">
          <div style={{
            width: "100%",
            height: imgHeight,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "900",
            letterSpacing: "1px"
          }}>
            <h2>{id}: {title}</h2>
          </div>
        </div>
        <div className="card-text">
          {brief_text}
        </div>
        <p className="card-text">{footer}</p>
      </div>
    </div>
  )

}

export default Card

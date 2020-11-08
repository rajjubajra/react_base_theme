import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCategoryImageIdNext, actionCategoryImageIdPrev, actionCategoryImageIdClose } from '../../actions/actionFetchCategory';


const viewImage = {
  zIndex: "10",
  position: "fixed",
  top: "8%",
  left: "0",
  width: "100%",
  border: "10px solid #fff",
  backgroundColor: "rgb(255 255 255 / 80%)",
  textAlign: "center",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const imageStyle = {
  maxWidth: "300px"
}


export default function ViewImage(props) {
  const dispatch = useDispatch();
  const payloadLength = useSelector(state => state.reducerFetchData.payloadLength);

  return (
    <div style={viewImage}>
      <div onClick={() => dispatch(actionCategoryImageIdNext())}>
        {props.id - 1 === payloadLength ? '' : 'Next'}
      </div>
      <div>
        <h1>{props.id}</h1>
        <div onClick={() => dispatch(actionCategoryImageIdClose())}>Close</div>
        <img style={imageStyle} src={props.imageUrl} alt="Actual size view" />
      </div>
      <div onClick={() => dispatch(actionCategoryImageIdPrev())}>
        {props.id < 1 ? '' : 'Prev'}
      </div>
    </div>
  )
}

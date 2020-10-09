import axios from 'axios';
import { actionTypes } from './actionTypes';

export function actionFetchProducts() {
  return function (dispatch) {
    dispatch({ type: actionTypes.FETCH_LAN_PASAA_PRODUCTS_START })
    axios.get("https://my-json-server.typicode.com/rajjubajra/json-server/LanPasaa")
      //axios.get("http://localhost:3000/LanPasaa")
      .then((res) => {
        dispatch({
          type: actionTypes.FETCH_LAN_PASAA_PRODUCTS_RECEIVED,
          payload: res.data
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FETCH_LAN_PASAA_PRODUCTS_ERROR,
          payload: error
        })
      })
  }
}
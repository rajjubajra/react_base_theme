import { actionTypes } from "./actionType"
import axios from "axios"
import { about } from '../config/Config';

export const actionFetchAbout = () => {

  const aboutURL = about.URL;

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING
    })

    axios({
      method: 'GET',
      url: aboutURL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log(res.data)

        dispatch({
          type: actionTypes.FETCH_ABOUT,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}






import { actionTypes } from "./actionTypes"
import axios from "axios"


export const actionFetchMenuThree = () => {

  const restApi = 'https://yellow-website.com/d8-react-base-theme-backend/api/menu_items/menu-with-brief-desc?_format=json';

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_MENU_THREE
    })

    axios({
      method: 'GET',
      url: restApi,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log(res.data)

        dispatch({
          type: actionTypes.FETCHED_MENU_THREE,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_MENU_THREE,
          fetched: false,
          error: err
        })
      })
  }
}






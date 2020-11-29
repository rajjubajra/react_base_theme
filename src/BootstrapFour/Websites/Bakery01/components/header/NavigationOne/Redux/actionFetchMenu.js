import { actionTypes } from "./actionTypes"
import axios from "axios"
import { baseUrl } from '../../../../Config/dataurl';

export const actionFetchMenu = () => {


  return function (dispatch) {

    dispatch({
      type: actionTypes.START_FETCHING_MENU_BAKERY_ONE
    })

    axios({
      method: 'GET',
      url: `${baseUrl.URL}/api/menu_items/business-two`,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("MENU BUSINESS", res.data)
        dispatch({
          type: actionTypes.FETCHED_MENU_BAKERY_ONE,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_MENU_BAKERY_ONE,
          fetched: false,
          error: err
        })
      })
  }
}
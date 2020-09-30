import { actionTypes } from "./actionTypes"
import axios from "axios"


export const actionFetchUserMenuFour = () => {

  const restApi = 'https://yellow-website.com/d8-react-base-theme-backend/api/menu_items/product-user-menu?_format=json';

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_USER_MENU_FOUR
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
          type: actionTypes.FETCHED_USER_MENU_FOUR,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_USER_MENU_FOUR,
          fetched: false,
          error: err
        })
      })
  }
}






import { actionTypes } from "./actionTypes"
import axios from "axios"
import { baseUrl } from '../../../../Config/dataurl';

export const actionFetchMenu = () => {


  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_MENU
    })

    axios({
      method: 'GET',
      url: `${baseUrl.URL}/api/menu_items/music-website`,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log(res.data)

        dispatch({
          type: actionTypes.FETCHED_MENU,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_MENU,
          fetched: false,
          error: err
        })
      })
  }
}
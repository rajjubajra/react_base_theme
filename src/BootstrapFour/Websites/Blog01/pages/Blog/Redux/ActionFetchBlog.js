import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const ActionFetchBlog = (page) => {



  return function (dispatch) {
    dispatch({
      type: actionTypes.BLOG_ONE_BLOG_FETCHING
    })

    axios({
      method: 'GET',
      url: `${baseUrl.URL}/blog?page=${page}`, //PAGER IS SET IN TO THE DRUPAL VIEW
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("FETCH ACTION", res.data)
        dispatch({
          type: actionTypes.BLOG_ONE_BLOG_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.BLOG_ONE_BLOG_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}
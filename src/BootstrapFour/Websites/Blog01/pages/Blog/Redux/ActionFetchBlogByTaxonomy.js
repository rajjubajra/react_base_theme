import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const ActionFetchBlogByTaxonomy = (tid, page) => {


  return function (dispatch) {
    dispatch({
      type: actionTypes.BLOG_ONE_BY_TAXONOMY_FETCHING
    })

    axios({
      method: 'GET',
      url: `${baseUrl.URL}/blog-by-taxonomy/${tid}?_format=json&page=${page}`,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("FETCH ACTION", res.data)
        dispatch({
          type: actionTypes.BLOG_ONE_BY_TAXONOMY_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.BLOG_ONE_BY_TAXONOMY_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}
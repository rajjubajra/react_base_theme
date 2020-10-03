import { actionTypes } from "./actionTypes"
import axios from "axios"


export const actionFetchMagazineMenu = () => {

  const restApi = 'https://yellow-website.com/d8-react-base-theme-backend/api/menu_items/news-and-magazine?_format=json';


  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_MAGAZINE_MENU
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
        let Arr = [];
        res.data.forEach(function (elm) {
          Arr.push({
            title: elm.title,
            expanded: elm.expanded,
            uri: elm.uri,
            description: elm.description,
            key: elm.key,
            weight: elm.weight,
            below: elm.expanded ? elm.below : [],
          });
        })
        console.log("Array??", Arr);

        dispatch({
          type: actionTypes.FETCHED_MAGAZINE_MENU,
          menuArr: Arr,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_MAGAZINE_MENU,
          fetched: false,
          error: err
        })
      })
  }
}
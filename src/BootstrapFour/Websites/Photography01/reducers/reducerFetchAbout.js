const { actionTypes } = require("../actions/actionType")

const initalState = {
  payload: '',
  fetching: false,
  fetched: false,
  error: '',
  data: [],
  dataLength: 0,
}

export const reducerFetchAbout = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.FETCH_ABOUT:
      console.log('reducer about', action.data);
      let arr = [];
      action.data.forEach(function (item) {
        arr.push({
          title: item.title[0].value,
          images: item.field_photography_gallery_image,
          text: item.field_photography_gallery_text[0].value,
          nid: item.nid[0].value
        })
      })
      return {
        fetched: true,
        payload: arr,
        data: action.data,
        dataLength: action.data.length
      }
    case actionTypes.FETCH_ERROR:
      return {
        fetched: false,
        fetching: false,
        error: action.error
      }
    /** default state */
    default:
      return state;
  }

}




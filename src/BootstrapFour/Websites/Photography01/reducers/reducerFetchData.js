const { actionTypes } = require("../actions/actionType")

const initalState = {
  payload: [],
  payloadLength: 0,
  fetching: false,
  fetched: false,
  error: '',
  data: [],
  dataLength: 0,
}

export const reducerFetchData = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.FETCHED:
      console.log('reducer', action.data);
      let arr = [];
      action.data.forEach(function (item) {
        arr.push({
          title: item.title[0].value,
          images: item.field_photography_gallery_image,
          text: item.field_photography_gallery_text[0].value,
          uuid: item.uuid[0].value
        })
      })
      return {
        fetched: true,
        payload: arr,
        payloadLength: arr.length,
        data: action.data,
        dataLength: action.data.length
      }
    /** Error */
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




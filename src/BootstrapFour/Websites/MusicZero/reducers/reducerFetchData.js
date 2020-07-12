const { actionTypes } = require("../actions/actionType")

const initalState = {
  payload: [],
  fetching: false,
  fetched: false,
  error: '',
  data: [],
  tracks: [],
  albumId: ''
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
          url: item.field_image_medium[0].url,
          alt: item.field_image_medium[0].alt,
          uuid: item.uuid[0].value
        })
      })
      return {
        fetched: true,
        payload: arr,
        data: action.data
      }
    /** FETCH DATA FOR Music/Album Detail with tracks page  */
    case actionTypes.FETCH_ALBUM:
      return {
        albumId: action.id,
        tracks: state.data[action.id].field_track,
        coverImage: state.data[action.id].field_image_medium[0]
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



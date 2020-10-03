const { actionTypes } = require('./actionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
}

export const reducerMagazineMenu = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING_MAGAZINE_MENU:
      return {
        fetching: true
      }
    /** FETCH MENU DATA   */
    case actionTypes.FETCHED_MAGAZINE_MENU:
      console.log('DATA menu REDUCER', action.data[0]);
      return {
        data: action.data,
        fetched: true,
        dataLength: action.data.length
      }
    case actionTypes.FETCH_ERROR_MAGAZINE_MENU:
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




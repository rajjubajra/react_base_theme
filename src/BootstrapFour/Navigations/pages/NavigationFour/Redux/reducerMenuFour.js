const { actionTypes } = require('./actionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
}

export const reducerMenuFour = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING_MENU_FOUR:
      return {
        fetching: true
      }
    /** FETCH MENU DATA   */
    case actionTypes.FETCHED_MENU_FOUR:
      console.log('DATA menu REDUCER', action.data);
      return {
        data: action.data,
        fetched: true,
        dataLength: action.data.length
      }
    case actionTypes.FETCH_ERROR_MENU_FOUR:
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




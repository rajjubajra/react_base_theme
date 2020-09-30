const { actionTypes } = require('./actionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
}

export const reducerUserMenuFour = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING_USER_MENU_FOUR:
      return {
        fetching: true
      }
    /** FETCH MENU DATA   */
    case actionTypes.FETCHED_USER_MENU_FOUR:
      console.log('DATA menu REDUCER', action.data);
      return {
        data: action.data,
        fetched: true,
        dataLength: action.data.length
      }
    case actionTypes.FETCH_ERROR_USER_MENU_FOUR:
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




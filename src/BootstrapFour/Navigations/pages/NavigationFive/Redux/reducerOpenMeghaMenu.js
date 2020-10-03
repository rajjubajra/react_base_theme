import { actionTypes } from "./actionTypes";

const initialState = {
  status: false,
  openSearch: false,
}


export const reducerOpenMeghaMenu = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.OPEN_MEGHA_MENU:
      return {
        status: state.status ? false : true,
      }
    case actionTypes.OPEN_SEARCH:
      return {
        openSearch: state.openSearch ? false : true
      }
    /** default state */
    default:
      return state;
  }

}

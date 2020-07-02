import { actionTypes } from "../actions/actionType"

const initalstate = {
  prev: 0,
  next: 0,
}

export const reducerPagination = (state = initalstate, action) => {
  switch (action.type) {
    case actionTypes.PAGINATION_ITEM_NEXT:
      return {
        next: action.items
      }
    case actionTypes.PAGINATION_ITEM_PREV:
      return {
        prev: action.items
      }
    default:
      return state;
  }
}
import { actionTypes } from "../actions/actionTypes"

const initialState = {
  category: '',
  itemId: 0,
  itemName: '',
  itemPrice: 0,
  itemImage: '',
  titleAnimation: false
}

export const reducerNavigation = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY_NAV:
      { return { category: action.payload, itemId: 0 } }
    case actionTypes.ITEM_DETAILS:
      {
        return {
          category: state.category,
          itemId: action.itemId,
          itemName: action.itemName,
          itemPrice: action.itemPrice,
          itemImage: action.itemImage
        }
      }
    case actionTypes.ITEM_DETAILS_CLEAR:
      {
        return {
          category: state.category,
          itemId: 0,
          itemName: '',
          itemPrice: 0,
          itemImage: ''
        }
      }
    case actionTypes.ADD_ANIMATION_TO_TITLE:
      {
        return {
          category: state.category,
          itemId: state.itemId,
          itemName: state.itemName,
          itemPrice: state.itemPrice,
          titleAnimation: true
        }
      }
    default:
      return state;
  }
}
import { actionTypes } from '../actions/ActionTypes';


const initialState = {
  colourMode: 'black-white-theme',
  variant: 'dark'
}

export const reducerSelectColourMode = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_COLOUR_MODE:
      return {
        colourMode: action.payload,
        variant: action.variant
      }

    default:
      return state;
  }
}

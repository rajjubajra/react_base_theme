const { actionTypes } = require('../actions/ActionTypes');

const initalState = {
  tag_id: 0
}

export const reducerFetchPhoto = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.PHOTO_GROUP_TAG_ID:
      return {
        tag_id: action.tag_id
      }
    /** default state */
    default:
      return state;
  }

}




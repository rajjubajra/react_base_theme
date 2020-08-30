const { actionTypes } = require('../actions/ActionTypes');

const initalState = {
  blogId: null
}

export const reducerPassBlogId = (state = initalState, action) => {

  switch (action.type) {

    case actionTypes.PASS_BLOGID:
      return { blogId: action.blogId }

    case actionTypes.CLEAR_BLOGID:
      return { blogId: action.blogId }

    /** default state */
    default:
      return state;
  }

}




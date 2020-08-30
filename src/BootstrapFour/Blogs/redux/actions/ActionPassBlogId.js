import { actionTypes } from './ActionTypes';

export const actionPassBlogId = (id) => {
  return {
    type: actionTypes.PASS_BLOGID,
    blogId: id
  }
}

export const actionClearBlogId = () => {
  return {
    type: actionTypes.CLEAR_BLOGID,
    blogId: null
  }
}
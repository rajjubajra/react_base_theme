import { actionTypes } from './actionType';

export const actionFetchCategory = (id) => (
  {
    type: actionTypes.FETCH_CATEGORY,
    id: id
  }
)

export const actionCategoryImageId = (id) => (
  {
    type: actionTypes.CATEGORY_IMAGE_ID,
    id: id
  }
)

export const actionCategoryImageIdNext = () => (
  {
    type: actionTypes.CATEGORY_IMAGE_ID_NEXT
  }
)

export const actionCategoryImageIdPrev = () => (
  {
    type: actionTypes.CATEGORY_IMAGE_ID_PREV
  }
)

export const actionCategoryImageIdClose = () => (
  {
    type: actionTypes.CATEGORY_IMAGE_ID_CLOSE
  }
)

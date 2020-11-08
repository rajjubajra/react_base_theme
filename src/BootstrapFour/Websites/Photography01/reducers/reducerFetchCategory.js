const { actionTypes } = require("../actions/actionType")

const initalState = {
  categoryId: '',
  categoryStatus: false,
  imageId: '',
  viewImage: false
}

export const reducerFetchCategory = (state = initalState, action) => {
  switch (action.type) {

    case actionTypes.FETCH_CATEGORY:
      return {
        categoryId: action.id,
        categoryStatus: true
      }
    case actionTypes.CATEGORY_IMAGE_ID:
      return {
        categoryId: state.categoryId,
        categoryStatus: true,
        imageId: action.id,
        viewImage: true
      }
    case actionTypes.CATEGORY_IMAGE_ID_NEXT:
      return {
        categoryId: state.categoryId,
        categoryStatus: true,
        imageId: state.imageId + 1,
        viewImage: true
      }
    case actionTypes.CATEGORY_IMAGE_ID_PREV:
      return {
        categoryId: state.categoryId,
        categoryStatus: true,
        imageId: state.imageId - 1,
        viewImage: true
      }
    case actionTypes.CATEGORY_IMAGE_ID_CLOSE:
      return {
        categoryId: state.categoryId,
        categoryStatus: true,
        imageId: '',
        viewImage: false
      }
    default:
      return state;
  }

}
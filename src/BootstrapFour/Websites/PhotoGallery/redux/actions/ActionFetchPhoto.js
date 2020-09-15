import { actionTypes } from "./ActionTypes"


export const actionFetchPhoto = (id) => {

  return {
    type: actionTypes.PHOTO_GROUP_TAG_ID,
    tag_id: id
  }

}
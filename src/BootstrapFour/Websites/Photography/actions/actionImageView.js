const { actionTypes } = require("./actionType");

export const actionImageView = (track, id) => (
  {
    type: actionTypes.IMAGE_VIEW,
    track: track,
    id: id
  }
)

export const actionImageNext = (track, id) => (
  {
    type: actionTypes.IMAGE_NEXT,
    track: track,
    status: 'pause',
    id: id
  }
)

export const actionImagePrev = (track, id) => (
  {
    type: actionTypes.IMAGE_PREV,
    track: track,
    status: 'stop',
    id: id
  }
)


import { actionTypes } from "./actionType";

export const actionPaginationItemInAPage = (number) => (
  {
    type: actionTypes.PAGINATION_ITEMS_IN_A_PAGE,
    items: number
  }
)

export const actionPaginationPrev = (number) => (
  {
    type: actionTypes.PAGINATION_ITEM_PREV,
    items: number
  }
)

export const actionPaginationNext = (number) => (
  {
    type: actionTypes.PAGINATION_ITEM_NEXT,
    items: number
  }
)
import { SET_SORT_CLAUSE, SET_SORT_DIRECTION } from '@redux/action-type'

export const setSortClause = (clause) => ({
  type: SET_SORT_CLAUSE,
  payload: clause
})

export const setSortDirection = (direction) => ({
  type: SET_SORT_DIRECTION,
  payload: direction
})

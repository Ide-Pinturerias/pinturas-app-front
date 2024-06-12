import { SET_LOW_PRICE } from '@redux/action-type'

export const setLowPrice = (lowPrice) => ({
  type: SET_LOW_PRICE,
  payload: lowPrice
})

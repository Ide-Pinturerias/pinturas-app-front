import { SET_HIGH_PRICE } from '@redux/action-type'

export const setHighPrice = (highPrice) => ({
  type: SET_HIGH_PRICE,
  payload: highPrice
})

import axios from 'axios'
import { POST_ORDER_CART, BASE_URL } from '../../action-type'

export const postOrderByCart = (idCart) => {
  const body = { idCart }
  return async (dispatch) => {
    try {
      const { order } = (await axios.post(`${BASE_URL}orders/cart`, body)).data

      dispatch({ type: POST_ORDER_CART })

      console.log(order)// to-do quitar antes del merge
      return order.id
    } catch (error) {
      console.log('postOrderByCart error:', error)
    }
  }
}

import axios from 'axios'
import { POST_ORDER_PAYMENT, BASE_URL } from '../../action-type'

export const postOrderPayment = (idOrder) => {
  return async (dispatch) => {
    try {
      const body = { idOrder }
      const { preference } = (await axios.post(`${BASE_URL}orders/payment`, body)).data
      dispatch({ type: POST_ORDER_PAYMENT })

      console.log(preference) // to-do quitar antes del merge
      return preference.init_point
    } catch (error) {
      console.log('postOrderPayment error:', error)
    }
  }
}

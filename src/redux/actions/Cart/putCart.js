import { PUT_CART, BASE_URL } from '../../action-type'
import axios from 'axios'

export const putCart = (data) => {
  return async (dispatch) => {
    try {
      const response = (await axios.put(`${BASE_URL}carts`, data)).data

      console.log('response putCart', response)
      dispatch({ type: PUT_CART, payload: response.products })

      return response
    } catch (error) {
      console.log('error putCart: ', error.message)
    }
  }
}

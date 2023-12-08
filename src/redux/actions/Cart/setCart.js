import { SET_CART, BASE_URL } from '../../action-type'
import axios from 'axios'

export const setCart = (idUser, products) => {
  return async (dispatch) => {
    // actualizo db
    const cart = (await axios.put(`${BASE_URL}carts`, {
      idUser,
      products: JSON.stringify(products)
    })).data
    // actualizo estado global
    dispatch({ type: SET_CART, payload: cart })
  }
}

import { CLEAR_CART, BASE_URL } from '../../action-type'
import axios from 'axios'

export const clearCart = (idUser, products = []) => {
  return async (dispatch) => {
    // limpio local storage
    localStorage.setItem('productsLocal', JSON.stringify(products))
    // actualizo db
    const cart = (await axios.put(`${BASE_URL}carts`, {
      idUser,
      products: JSON.stringify(products)
    })).data
    // actualizo estado global
    dispatch({ type: CLEAR_CART, payload: cart })
  }
}

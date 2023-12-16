import { FIND_OR_CREATE_CART, BASE_URL } from '../../action-type'

import axios from 'axios'

export const findOrCreateCart = (idUser) => {
  return async (dispatch) => {
    const cart = (await axios.post(`${BASE_URL}carts`, { idUser })).data
    // seteo localmente
    localStorage.setItem('productsLocal', cart.products)
    // seteo estado global
    dispatch({ type: FIND_OR_CREATE_CART, payload: cart })
  }
}

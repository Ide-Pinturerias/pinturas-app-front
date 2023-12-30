import { FIND_OR_CREATE_CART, BASE_URL } from '../../action-type'

import axios from 'axios'

export const findOrCreateCart = (idUser) => {
  return async (dispatch) => {
    let cart = (await axios.post(`${BASE_URL}carts`, { idUser })).data

    // si el carro tiene productos seteo localmente
    if (cart.products !== null) {
      localStorage.setItem('productsLocal', cart.products)
    }

    // en caso de tener productos localmente y luego crearme un usuario necesito guardarlos en la db y Redux
    const productsLocal = JSON.parse(localStorage.getItem('productsLocal')) || []
    if (cart.products === null & productsLocal.length > 0) {
      cart = (await axios.put(`${BASE_URL}carts`, {
        idUser,
        products: JSON.stringify(productsLocal)
      })).data
    }

    // seteo estado global
    dispatch({ type: FIND_OR_CREATE_CART, payload: cart })
  }
}

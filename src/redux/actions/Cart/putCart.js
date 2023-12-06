import { PUT_CART, BASE_URL } from '../../action-type'

import axios from 'axios'

export const putCart = (idUser, products, addProduct) => {
  products.push(addProduct)
  localStorage.setItem('productsLocal', JSON.stringify(products))
  return async (dispatch) => {
    const cart = (await axios.put(`${BASE_URL}carts`, {
      idUser,
      products: JSON.stringify(products)
    })).data
    console.log(cart)
    dispatch({ type: PUT_CART, payload: cart })
  }
}

import { ADD_PRODUCT_CART, BASE_URL } from '../../action-type'

import axios from 'axios'

export const addProductCart = (idUser, products, addProduct) => {
  products.push(addProduct)
  // actualizo local
  localStorage.setItem('productsLocal', JSON.stringify(products))
  return async (dispatch) => {
    // actualizo db
    const cart = (await axios.put(`${BASE_URL}carts`, {
      idUser,
      products: JSON.stringify(products)
    })).data
    console.log(cart)
    dispatch({ type: ADD_PRODUCT_CART, payload: cart })
  }
}

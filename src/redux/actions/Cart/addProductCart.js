import { ADD_PRODUCT_CART, BASE_URL } from '../../action-type'
import axios from 'axios'

export const addProductCart = (idUser, products, addProduct) => {
  return async (dispatch) => {
    products.push(addProduct)
    // actualizo local
    localStorage.setItem('productsLocal', JSON.stringify(products))
    if (!idUser) return products
    // actualizo db
    const cart = (await axios.put(`${BASE_URL}carts`, {
      idUser,
      products: JSON.stringify(products)
    })).data

    dispatch({ type: ADD_PRODUCT_CART, payload: cart })
  }
}

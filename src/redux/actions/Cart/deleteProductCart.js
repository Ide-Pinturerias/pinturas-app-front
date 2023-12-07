import { DELETE_PRODUCT_CART, BASE_URL } from '../../action-type'
import axios from 'axios'

export const deleteProductCart = (user, products, idProduct) => {
  return async (dispatch) => {
    const productsUpdated = products.filter(product => Number(product.id) !== idProduct)
    localStorage.setItem('productsLocal', JSON.stringify(productsUpdated))
    if (!user) return productsUpdated

    const cart = (await axios.put(`${BASE_URL}carts`, {
      idUser: user.id,
      products: JSON.stringify(productsUpdated)
    })).data

    dispatch({ type: DELETE_PRODUCT_CART, payload: cart })
  }
}

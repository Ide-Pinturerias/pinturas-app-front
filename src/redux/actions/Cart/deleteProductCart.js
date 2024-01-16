import Swal from 'sweetalert2'
import { DELETE_PRODUCT_CART, BASE_URL } from '../../action-type'
import axios from 'axios'

export const deleteProductCart = (user, idProduct) => {
  return async (dispatch) => {
    try {
      const productsLocal = JSON.parse(window.localStorage.getItem('productsLocal')) || []

      const productsUpdated = productsLocal.filter(product => {
        return String(product.id) !== String(idProduct)
      })

      // Actualizo local storage
      localStorage.setItem('productsLocal', JSON.stringify(productsUpdated))
      if (Object.keys(user).length === 0) return productsUpdated

      // Si hay usuario actualizo DB
      const cart = (await axios.put(`${BASE_URL}carts`, {
        idUser: user.id,
        products: JSON.stringify(productsUpdated)
      })).data

      // Y actualizo Redux
      dispatch({ type: DELETE_PRODUCT_CART, payload: cart })
    } catch (error) {
      console.error(error.message)
      Swal.fire({
        title: 'Oooops!',
        text: 'Algo salió mal',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }
}

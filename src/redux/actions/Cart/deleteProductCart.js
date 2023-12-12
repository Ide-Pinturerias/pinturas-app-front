import Swal from 'sweetalert2'
import { DELETE_PRODUCT_CART, BASE_URL } from '../../action-type'
import axios from 'axios'

export const deleteProductCart = (user, products, idProduct) => {
  return async (dispatch) => {
    try {
      const productsUpdated = products.filter(product => Number(product.id) !== idProduct)

      // Actualizo local storage
      localStorage.setItem('productsLocal', JSON.stringify(productsUpdated))
      if (!user) return productsUpdated

      // actualizo DB
      const cart = (await axios.put(`${BASE_URL}carts`, {
        idUser: user.id,
        products: JSON.stringify(productsUpdated)
      })).data

      // Actualizo Redux
      dispatch({ type: DELETE_PRODUCT_CART, payload: cart })
      Swal.fire({
        title: 'EXITO!',
        text: 'Producto eliminado del carrito',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
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

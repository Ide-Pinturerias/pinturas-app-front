import Swal from 'sweetalert2'
import { ADD_PRODUCT_CART, BASE_URL } from '../../action-type'
import axios from 'axios'

export const addProductCart = (idUser, products, addProduct) => {
  return async (dispatch) => {
    try {
      products.push(addProduct)
      // actualizo local storage
      localStorage.setItem('productsLocal', JSON.stringify(products))
      if (!idUser) return products
      // actualizo db
      const cart = (await axios.put(`${BASE_URL}carts`, {
        idUser,
        products: JSON.stringify(products)
      })).data
      // actualizo redux
      dispatch({ type: ADD_PRODUCT_CART, payload: cart })
      Swal.fire({
        title: 'EXITO!',
        text: 'Producto agregado al carrito',
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

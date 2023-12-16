import Swal from 'sweetalert2'
import { ADD_PRODUCT_CART, BASE_URL } from '../../action-type'
import axios from 'axios'

export const addProductCart = (idUser, products, productToAdd) => {
  return async (dispatch) => {
    try {
      products.push(productToAdd)

      // Actualizo local storage
      localStorage.setItem('productsLocal', JSON.stringify(products))
      if (!idUser) {
        Swal.fire({
          title: 'EXITO!',
          text: 'Producto agregado al carrito',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        return products
      }

      // Si hay usuario actualizo db
      const cart = (await axios.put(`${BASE_URL}carts`, {
        idUser,
        products: JSON.stringify(products)
      })).data

      // Y actualizo redux
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

import axios from 'axios'
import { POST_LOGIN_USER, ACCESS_TOKEN, BASE_URL } from '../../action-type'
import { findOrCreateCart } from '../Cart/findOrCreateCart'
import { setCart } from '../Cart/setCart'

export const postLoginUser = (userLogin) => {
  return async (dispatch) => {
    try {
      const response = (await axios.post(`${BASE_URL}users/login`, userLogin)).data
      if (response?.acceso?.user?.active) {
        const loginUser = response.acceso.user
        const token = response.acceso.token

        localStorage.setItem('user', JSON.stringify(loginUser))
        localStorage.setItem('token', JSON.stringify(token))
        const productsLocal = JSON.parse(localStorage.getItem('productsLocal')) || null
        // si no estoy logueado y tengo productos en el carrito local lo seteara al loguearse sino accedera a traer el carrito que ya tenia almancenado en base de datos, si no tenia ninguno se le asignara un carrito vacio
        if (productsLocal !== null) dispatch(setCart(loginUser.id, productsLocal))

        dispatch(findOrCreateCart(loginUser.id))
        dispatch({ type: ACCESS_TOKEN, payload: token })
        dispatch({ type: POST_LOGIN_USER, payload: loginUser })
      }
      return response
    } catch (error) {
      console.log('postLoginUser', error)

      return {
        status: 'fail',
        message: 'Los datos ingresados son incorrectos'
      }
    };
  }
}

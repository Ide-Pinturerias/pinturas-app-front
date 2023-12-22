import { GET_BEST_SELL } from '@redux/action-type'
import { get_best_sellers_request } from '@api'

export const getBestSellers = (limit) => async (dispatch) => {
  try {
    // Asegurarse de que "limit" sea un número (por defecto: 4).
    limit = typeof (limit) === 'number' ? limit : 4
    // Hacer la petición a la api pasando "limit" como parámetro para obtener los productos más vendidos.
    const bestSellers = await get_best_sellers_request(limit)
    dispatch({ type: GET_BEST_SELL, payload: bestSellers })
  } catch (error) {
    console.log('Error trying to dispatch getBestSellers: ' + error)
    throw error
  }
}

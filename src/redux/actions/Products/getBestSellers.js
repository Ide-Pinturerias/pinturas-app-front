import { GET_BEST_SELL } from '../../action-type'
import { get_best_sellers_request } from '@api'

export const getBestSellers = (limit) => async (dispatch) => {
  try {
    // Límite por defecto es igual a 4.
    limit = typeof (limit) !== 'number' ? limit : 4
    const bestSellers = await get_best_sellers_request(limit)
    dispatch({ type: GET_BEST_SELL, payload: bestSellers })
  } catch (error) {
    console.log('Error trying to dispatch getBestSellers' + error)
    throw error
  }
}

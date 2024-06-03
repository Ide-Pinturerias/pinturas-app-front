import { GET_ALL_PRODUCTS_PAGINATED, SET_TOTAL_PAGES } from '@redux/action-type'
import { GetPaginatedProducts } from '@api'
import { array } from '../../../services/data.js'

export const getAllProductsPaginated = (page) => async (dispatch) => {
  try {
    // Construir la query con el parámetro "page" (por defecto: 1).
    const query = `&page=${page || 1}`
    // Hacer la petición de la api con la query creada para obtener los productos por páginas.
    // const data = await GetPaginatedProducts(query)
    // const totalPages = data.pages
    // const paginatedProducts = data.results.rows
    // Despachar las acciones a redux.

    dispatch({ type: SET_TOTAL_PAGES, payload: 10 })
    dispatch({ type: GET_ALL_PRODUCTS_PAGINATED, payload: array })
  } catch (error) {
    console.log('Error trying to dispatch getAllProductsPaginated: ' + error)
    throw error
  }
}

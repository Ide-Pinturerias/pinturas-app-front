import { GET_ALL_PRODUCTS_PAGINATED, SET_TOTAL_PAGES } from '@redux/action-type'
import { get_all_products_paginated_request } from '@api'

export const getAllProductsPaginated = (page) => async (dispatch) => {
  try {
    // Construir la query con el parámetro "page" (por defecto: 1).
    const query = `&page=${page || 1}`
    // Hacer la petición de la api con la query creada para obtener los productos por páginas.
    const data = await get_all_products_paginated_request(query)
    const totalPages = data.pages
    const paginatedProducts = data.results.rows
    // Despachar las acciones a redux.
    dispatch({ type: SET_TOTAL_PAGES, payload: totalPages })
    dispatch({ type: GET_ALL_PRODUCTS_PAGINATED, payload: paginatedProducts })
  } catch (error) {
    console.log('Error trying to dispatch getAllProductsPaginated: ' + error)
    throw error
  }
}

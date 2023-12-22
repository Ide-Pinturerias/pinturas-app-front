import { GET_ALL_PRODUCTS_PAGINATED, SET_TOTAL_PAGES } from '@redux/action-type'
import { get_all_products_paginated_request } from '@api'

export const getAllProductsPaginated = (page) => async (dispatch) => {
    try {
      // Establecer página por defecto en 1.
      const query = `&page=${page || 1}`
      const data = await get_all_products_paginated_request(query)
      const totalPages = data.pages
      const paginatedProducts = data.results.rows
      dispatch({ type: SET_TOTAL_PAGES, payload: totalPages })
      dispatch({ type: GET_ALL_PRODUCTS_PAGINATED, payload: paginatedProducts })
    } catch (error) {
      console.log('Error trying to dispatch getAllProductsPaginated: ' + error)
      throw error
    }
  }

import { GET_ALL_PRODUCTS_FILTERED, SET_TOTAL_PAGES } from '@redux/action-type'
import { get_all_products_filtered } from '@api'

export const getAllProductsFiltered = (page, category, low, high) => async (dispatch) => {
  // minRating,
  // maxRating,
  // minStock,
  // maxStock,
  // color,
  // sortBy,
  // orderBy
  try {
    const url = ['products?active=true']
    url.push(`&page=${page || 1}`)
    if (category) url.push(`&category=${category}`)
    if (low > 0) url.push(`&lowPrice=${low}`)
    if (high > 0) url.push(`&highPrice=${high}`)
    const query = url.join('')
    const response = await get_all_products_filtered(query)
    const pages = response.data.pages
    const products = response.data.results.rows
    dispatch({ type: SET_TOTAL_PAGES, payload: pages })
    dispatch({ type: GET_PRODUCT_FILTER, payload: products })
  } catch (error) {
    console.log('Error trying to dispatch getProductsFiltered: ' + error)
    dispatch({ type: GET_PRODUCT_FILTER, payload: [] })
  }
}

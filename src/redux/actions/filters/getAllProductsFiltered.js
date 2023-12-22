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
    // Construir la URL incial con un parámetro común.
    const url = ['products?active=true']
    // Concatenar paramétro "page" (por defecto: 1).
    url.push(`&page=${page || 1}`)
    // Concatenar el resto de paramétros: category, lowPrice, hightPrice.
    if (category) url.push(`&category=${category}`)
    if (low > 0) url.push(`&lowPrice=${low}`)
    if (high > 0) url.push(`&highPrice=${high}`)
    // Juntar el array en una sola string
    const query = url.join('')
    // Hacer la petición de la api con la query creada para obtener los productos filtrados.
    const response = await get_all_products_filtered(query)
    const pages = response.data.pages
    const products = response.data.results.rows
    // Despachar las acciones a redux.
    dispatch({ type: SET_TOTAL_PAGES, payload: pages })
    dispatch({ type: GET_ALL_PRODUCTS_FILTERED, payload: products })
  } catch (error) {
    console.log('Error trying to dispatch getProductsFiltered: ' + error)
    dispatch({ type: GET_ALL_PRODUCTS_FILTERED, payload: [] })
  }
}

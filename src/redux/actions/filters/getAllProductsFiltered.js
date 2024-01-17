import { GET_ALL_PRODUCTS_FILTERED, SET_TOTAL_PAGES } from '@redux/action-type'
import { get_all_products_filtered } from '@api'

export const getAllProductsFiltered = (page, category, lowPrice, highPrice, sortBy, orderBy) => async (dispatch) => {
  // minRating,
  // maxRating,
  // minStock,
  // maxStock,
  // color,
  // sortBy,
  // orderBy,
  // page, 
  // color,
  // active, 
  // limit
  try {
    // Construir la URL incial con un parámetro común.
    const url = ['products?active=true']
    // Concatenar paramétro "page" (por defecto: 1).
    url.push(`&page=${page || 1}`)
    // Concatenar el resto de paramétros: category, lowPrice, hightPrice.
    if (category) url.push(`&category=${category}`)
    if (lowPrice > 0) url.push(`&lowPrice=${lowPrice}`)
    if (highPrice > 0) url.push(`&highPrice=${highPrice}`)
    if (sortBy) url.push(`&sortBy=${sortBy}`)
    if (orderBy) url.push(`&orderBy=${orderBy}`)
    // Juntar el array en una sola string
    const query = url.join('')

    // Hacer la petición de la api con la query creada para obtener los productos filtrados.
    const data = await get_all_products_filtered(query)
    const pages = data.pages
    const filteredProducts = data.results.rows
    // Despachar las acciones a redux.
    dispatch({ type: SET_TOTAL_PAGES, payload: pages })
    dispatch({ type: GET_ALL_PRODUCTS_FILTERED, payload: filteredProducts })
  } catch (error) {
    console.log('Error trying to dispatch getAllProductsFiltered: ' + error)
    dispatch({ type: GET_ALL_PRODUCTS_FILTERED, payload: [] })
  }
}

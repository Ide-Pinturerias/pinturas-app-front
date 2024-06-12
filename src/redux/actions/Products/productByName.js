import { GET_ALL_PRODUCTS_PAGINATED, SET_TOTAL_PAGES, BASE_URL } from '../../action-type'
import axios from 'axios'

export const productByName = (name, page, category, lowPrice, highPrice) => {
  return async (dispatch) => {
    try {
      const url = ['&active=true']
      if (page) url.push(`&page=${page}`)
      if (!page) url.push(`&page=${1}`)
      if (category) url.push(`&category=${category}`)
      if (lowPrice !== 0) url.push(`&lowPrice=${lowPrice}`)
      if (highPrice !== 0) url.push(`&highPrice=${highPrice}`)
      const urlJoin = url.join('')
      const response = (await axios.get(`${BASE_URL}products/?name=${name}${urlJoin}`)).data
      const pages = response.pages
      const products = response.results.rows
      dispatch({ type: SET_TOTAL_PAGES, payload: pages })
      dispatch({ type: GET_ALL_PRODUCTS_PAGINATED, payload: products })
    } catch (error) {
      console.log('error', error)
      dispatch({ type: GET_ALL_PRODUCTS_PAGINATED, payload: [] })
    }
  }
}

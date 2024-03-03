import axios from 'axios'

// Nota: setear axios defaults en el futuro.
const BASE_URL = 'https://pinturas-app-back.onrender.com/'

export const GetBestSellers = async (limit) => {
  try {
    const response = await axios.get(`${BASE_URL}products?limit=${limit}&minRating=5`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error fetching best sellers: ', error)
    throw error
  }
}

export const GetPaginatedProducts = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}products?active=true${query}`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error fetching all products paginated: ', error)
    throw error
  }
}

export const GetCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}categories`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error fetching all categories: ', error)
    throw error
  }
}

export const GetFilteredProducts = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}${query}`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error fetching all products filtered: ', error)
    throw error
  }
}

export const GetSimilarProducts = async ({ currentId, limit, category, color }) => {
  try {
    // Construir la URL incial con un parámetro común.
    let url = ['products?active=true']
    // Concatenar paramétro "page".
    url.push('&page=1')
    // Concatenar el resto de paramétros: category.
    if (category) url.push(`&category=${category}`)
    if (color) url.push(`&color=${color}`)
    // Juntar el array en una sola string
    const query = url.join('')

    // Hacer la petición de la api con la query creada para obtener los productos filtrados.
    const data = await GetFilteredProducts(query)
    const similarProducts = data.results.rows.filter((product) => product.idProduct !== currentId).slice(0, limit)

    if (similarProducts.length < 2) {
      url = ['products?active=true']
      if (category) url.push(`&category=${category}`)
      const query = url.join('')
      // Hacer la petición de la api con la query creada para obtener los productos filtrados.
      const data = await GetFilteredProducts(query)
      // TODO: Implementar función get_all_products_filtered o similar.
      const similarProducts = data.results.rows.filter((product) => product.idProduct !== currentId).slice(0, limit)
      return similarProducts
    } else {
      return similarProducts
    }
  } catch (error) {
    console.log('Error fetching all products filtered: ' + error)
    return []
  }
}

export const GetFavorites = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}favorites/user`, user)
    const data = response.data
    return data
  } catch (error) {
    console.log('Error fetching favorites: ' + error)
    throw error
  }
}

export const PostFavorite = async (favData) => {
  try {
    const response = await axios.post(`${BASE_URL}favorites`, favData)
    const data = response.data
    return data
  } catch (error) {
    console.log('Error posting favorite: ' + error)
    throw error
  }
}

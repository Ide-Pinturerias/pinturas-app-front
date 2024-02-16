import { GET_SIMILAR_PRODUCTS } from '@redux/action-type'
import { get_all_products_filtered } from '@api'

export const getSimilarProducts = ({ currentId, limit, category, color }) => async (dispatch) => {
    try {
        // Construir la URL incial con un parámetro común.
        let url = ['products?active=true']
        // Concatenar paramétro "page" (por defecto: 1).
        url.push(`&page=1`)
        // Concatenar el resto de paramétros: category, lowPrice, hightPrice.
        if (category) url.push(`&category=${category}`)
        if (color) url.push(`&color=${color}`)
        // Juntar el array en una sola string
        const query = url.join('')

        // Hacer la petición de la api con la query creada para obtener los productos filtrados.
        const data = await get_all_products_filtered(query)
        const similarProducts = data.results.rows.filter((product) => product.idProduct !== currentId).slice(0, limit)

        if (similarProducts.length < 2) {
            url = ['products?active=true'];
            if (category) url.push(`&category=${category}`)
            const query = url.join('')
            // Hacer la petición de la api con la query creada para obtener los productos filtrados.
            const data = await get_all_products_filtered(query)
            const similarProducts = data.results.rows.filter((product) => product.idProduct !== currentId).slice(0, limit)
            console.log(similarProducts)
            dispatch({ type: GET_SIMILAR_PRODUCTS, payload: similarProducts })
        } else {
            // Despachar las acciones a redux.
            dispatch({ type: GET_SIMILAR_PRODUCTS, payload: similarProducts })
        }
    } catch (error) {
        console.log('Error trying to dispatch getSimilarProducts: ' + error)
        dispatch({ type: GET_SIMILAR_PRODUCTS, payload: [] })
    }
}

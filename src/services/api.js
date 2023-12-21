import axios from "axios"

// Nota: setear axios defaults en el futuro.
const BASE_URL = 'https://pinturas-app-back.onrender.com/'

export const get_best_sellers_request = async (limit) => {
    try {
        const response = await axios.get(`${BASE_URL}products?limit=${limit}&minRating=5`)
        const data = response.data.results.rows
        return data
    } catch (error) {
        console.error('Error fetching best sellers: ', error)
        throw error
    }
}
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

export const get_all_products_paginated_request = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}products?active=true${query}`)
        const data = response.data
        return data
    } catch (error) {
        console.error('Error fetching all products paginated: ', error)
        throw error
    }
}

export const get_all_categories_request = async () => {
    try {
        const response = await axios.get(`${BASE_URL}categories`)
        const data = response.data
        return data
    } catch (error) {
        console.error('Error fetching all categories: ', error)
        throw error
    }
}

export const get_all_products_filtered = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}${query}`)
        const data = response.data
        return dada
    } catch (error) {
        console.error('Error fetching all products filtered: ', error)
        throw error
    }
}
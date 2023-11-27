import axios from 'axios';
import { GET_BEST_SELL, BASE_URL } from '../../action-type';


export const getBestSellers = (limit) => {

    // Definir un límite por defecto.
    if (typeof (limit) !== "number") limit = 4;

    return async (dispatch) => {
        const product = (await axios.get(`${BASE_URL}products?limit=${limit}&minRating=5`)).data.results.rows;
        dispatch({ type: GET_BEST_SELL, payload: product });
    };
};
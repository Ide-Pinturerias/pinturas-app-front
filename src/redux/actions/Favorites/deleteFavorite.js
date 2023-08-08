import axios from "axios";
import { BASE_URL, DELETE_FAVORITES } from "../../action-type";

export const deleteFavorites = (idUser, idProduct) => {
    return async (dispatch) => {
        try {
            const response = (await axios.delete(`${BASE_URL}favorites?idUser=${idUser}&idProduct=${idProduct}`));

            dispatch({ type: DELETE_FAVORITES, payload: response })
        } catch (error) {
            console.log('error deleteFavorite:', error)
        }
    }
}
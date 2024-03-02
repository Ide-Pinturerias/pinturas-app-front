import { GET_FAVORITES } from '@redux/action-type'
import { GetFavorites } from '@api'

export const getFavorites = (id) => async (dispatch) => {
    try {
        const user = { idUser: id };
        const response = await GetFavorites(user);
        dispatch({ type: GET_FAVORITES, payload: response });
    } catch (error) {
        console.log('Error trying to dispatch getFavorites: ' + error);
    }
}

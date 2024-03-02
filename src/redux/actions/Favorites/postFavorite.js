import { ADD_FAVORITE } from '@redux/action-type'
import { PostFavorite } from '@api'

export const postFavorite = (favData) => async (dispatch) => {
    try {
        const data = await PostFavorite(favData);
        dispatch({ type: ADD_FAVORITE, payload: data });

    } catch (error) {
        console.log('Error trying to dispatch postFavorite: ' + error);
        throw error;
    }
}

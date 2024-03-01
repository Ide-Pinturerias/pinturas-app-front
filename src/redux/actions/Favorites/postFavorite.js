import { ADD_FAVORITE } from '@redux/action-type'
import { post_favorite } from '@api'

export const postFavorite = (favData) => async (dispatch) => {
    try {
        const data = await post_favorite(favData);
        dispatch({ type: ADD_FAVORITE, payload: data });

    } catch (error) {
        console.log('Error trying to dispatch postFavorite: ' + error);
        throw error;
    }
}

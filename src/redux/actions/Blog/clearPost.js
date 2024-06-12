import { CLEAR_POST } from '../../action-type'

const clearPost = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CLEAR_POST,
                payload: {}
            })
            return null
        } catch (error) {
            console.error(error)
        }
    }
}

export default clearPost

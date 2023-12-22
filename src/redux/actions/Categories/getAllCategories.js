import { GET_ALL_CATEGORIES } from '@redux/action-type'
import { get_all_categories_request } from '@api'

export const getAllCategories = () => async (dispatch) => {
  try {
    const allCategories = await get_all_categories_request()
    dispatch({ type: GET_ALL_CATEGORIES, payload: allCategories })
  } catch (error) {
    console.log('Error trying to dispatch getAllCategories ' + error)
    throw error
  }
}

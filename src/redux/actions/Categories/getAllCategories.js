import { GET_ALL_CATEGORIES } from '@redux/action-type'
import { getCategories } from '@api'

export const getAllCategories = () => async (dispatch) => {
  try {
    const allCategories = await getCategories()
    dispatch({ type: GET_ALL_CATEGORIES, payload: allCategories })
  } catch (error) {
    console.log('Error trying to dispatch getAllCategories ' + error)
    throw error
  }
}

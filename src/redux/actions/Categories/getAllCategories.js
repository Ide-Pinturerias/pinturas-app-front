import { GET_ALL_CATEGORIES } from '@redux/action-type'
import { GetCategories } from '@api'

export const getAllCategories = () => async (dispatch) => {
  try {
    const allCategories = await GetCategories()
    dispatch({ type: GET_ALL_CATEGORIES, payload: allCategories })
  } catch (error) {
    console.log('Error trying to dispatch getAllCategories ' + error)
    throw error
  }
}

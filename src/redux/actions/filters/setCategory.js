import { SET_CATEGORY } from '../../action-type'

// Idea: crear un array con todas las categorías existentes. En caso de que la categoría pasada por parámetro no se encuentre en este array, lanzar un error para evitar problemas en producción.
export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category
})

import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsPaginated } from '@redux/actions/Products/getAllProductsPaginated'
import { deleteProduct } from './deleteProduct'

const DeleteButton = ({ idProduct }) => {
  const dispatch = useDispatch()

  const handleClick = async () => {
    await deleteProduct(idProduct)
    dispatch(getAllProductsPaginated())
  }

  return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-red-500 hover:bg-fadepa text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Borrar</button>
        </div>
  )
}

export default DeleteButton

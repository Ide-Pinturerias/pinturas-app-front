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
            <button onClick={handleClick} className="bg-warning rounded-xl w-20 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Borrar</button>
        </div>
  )
}

export default DeleteButton

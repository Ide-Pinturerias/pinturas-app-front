import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateButton = ({ idProduct }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/edit/${idProduct}`)
  }

  return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-accentClear hover:bg-fadepa text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Editar</button>
        </div>
  )
}

export default UpdateButton

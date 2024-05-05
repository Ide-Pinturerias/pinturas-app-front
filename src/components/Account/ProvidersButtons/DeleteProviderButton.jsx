import React from 'react'
import { deleteProvider } from './deleteProvider'

const DeleteProviderButton = ({ providerId }) => {
  const handleClick = async (event) => {
    event.preventDefault()
    await deleteProvider(providerId)
  }

  return (
        <div className="justify-start">
            <button onClick={handleClick} className="bg-red-500 hover:bg-fadepa text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
        </div>
  )
}

export default DeleteProviderButton

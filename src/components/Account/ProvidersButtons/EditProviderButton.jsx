import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditProviderButton = ({ providerId }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/admin/providers/edit/${providerId}`)
  }

  return (
        <div className="justify-start">
            <button onClick={handleClick} className="bg-accentClear hover:bg-fadepa text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Editar</button>
        </div>
  )
}

export default EditProviderButton

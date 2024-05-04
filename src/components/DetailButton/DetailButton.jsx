import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getOrderById } from '@redux/actions/Orders/getOrderById'

const DetailButton = ({ idOrder }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    getOrderById(idOrder)(dispatch)
    .then((response) => {
      if (response) {
        navigate(`/orders/${idOrder}`)
      }
    })
    .catch((error) => console.log('error', error))
  }

  return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Ver detalle</button>
        </div>
  )
}

export default DetailButton

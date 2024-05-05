import React from 'react'
import { useDispatch } from 'react-redux'
import putOrder from '@redux/actions/Orders/putOrder'
import Swal from 'sweetalert2'

const PendingButton = ({ idOrder }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    const edition = { state: 'pending' }
    try {
      putOrder(idOrder, edition)(dispatch)
      Swal.fire({
        icon: 'success',
        text: 'Estado modificado con éxito'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: error.message
      })
    }
  }
  return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-blue-500 hover:bg-fadepa text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" > Pendiente</button >
        </div>
  )
}

export default PendingButton

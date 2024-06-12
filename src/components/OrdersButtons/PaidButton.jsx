import React from 'react'
import { useDispatch } from 'react-redux'
import putOrder from '@redux/actions/Orders/putOrder'
import Swal from 'sweetalert2'

const PaidButton = ({ idOrder }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    const edition = { state: 'paid' }
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
            <button onClick={handleClick} className="bg-primaryClear hover:bg-fadepa text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" > Pagado</button >
        </div>
  )
}

export default PaidButton

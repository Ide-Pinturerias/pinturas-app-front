import React from 'react'
import { useDispatch } from 'react-redux'
import putOrder from '@redux/actions/Orders/putOrder'
import Swal from 'sweetalert2'

const CompletedButton = ({ idOrder }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    const edition = { state: 'completed' }
    try {
      putOrder(idOrder, edition)(dispatch).then(response => {
        console.log('response en el submit', response)
        Swal.fire({
          icon: 'success',
          text: 'Estado modificado con éxito'
        })
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
            <button onClick={handleClick} className="bg-accentClear hover:bg-fadepa text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" > Completado</button >
        </div>
  )
}

export default CompletedButton

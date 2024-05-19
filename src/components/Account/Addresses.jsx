import { useState, useEffect } from 'react'
import { putUser } from '@redux/actions/User/putUser'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const Addresses = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [inputs, setInputs] = useState({
    address: '',
    locality: '',
    province: ''
  })

  useEffect(() => {
    setInputs({
      address: user.address ? user.address : ' ',
      locality: user.locality ? user.locality : ' ',
      province: user.province ? user.province : ' '
    })
  }, [user])

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    setInputs({
      ...inputs,
      [property]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await putUser(user.id, inputs)(dispatch)

    if (response.status === 200) {
      Swal.fire({
        icon: 'success',
        text: 'Información modificada correctamente'
      })
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Error al modificar información'
      })
    }
  }

  return (
    <div className="container mx-auto px-4 mt-20">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
          <label className="text-gray-600 text-xs mt-1">Dirección </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={handleChange}
            name="address"
            value={inputs.address}
            maxLength={45}
            />
        </div>
        <div className='mb-6'>
          <label className="text-gray-600 text-xs mt-1">Localidad </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={handleChange}
            name="locality"
            value={inputs.locality}
            maxLength={30}
            />
            </div>
          <div className='mb-6'>
          <label className="text-gray-600 text-xs mt-1">Provincia </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={handleChange}
            name="province"
            value={inputs.province}
            maxLength={30}
            />
            </div>          
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-fadepa hover:bg-primaryClear text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar cambios
          </button>
        </div>
      </form>
      <footer style={{ textAlign: 'center', padding: '14.5px' }}></footer>
    </div>
  )
}

export default Addresses

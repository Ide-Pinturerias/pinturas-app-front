import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { putUser } from '@redux/actions/User/putUser'
import { deleteUser } from '@redux/actions/User/deleteUser'
import { logoutUser } from '@redux/actions/User/logoutUser'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { updateUserValidation } from './updateUserValidation'
import { LoadingSpinner } from '@components/LoadingSpinner/LoadingSpinner'

const UpdateUserForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const [isLoading, setIsLoading] = useState(false)

  const [inputsForm, setInputsForm] = useState({
    name: '',
    lastName: '',
    email: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({
    empty: ''
  })

  useEffect(() => {
    setInputsForm({
      name: user.name,
      lastName: user.lastName,
      email: user.email
    })
  }, [dispatch])

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    setInputsForm({ ...inputsForm, [property]: value })
    setErrors(updateUserValidation({ ...inputsForm, [property]: value }))
  }

  // ENVIAR FORMULARIO
  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    if (Object.keys(errors).length === 0) {
      const { newPassword, confirmPassword, ...data } = inputsForm
      data.password = newPassword
      const response = await putUser(user.id, data)(dispatch)

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          text: 'Cuenta actualizada'
        })
        setIsLoading(false)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ooops!',
          text: 'Error al actualizar su cuenta'
        })
        setIsLoading(false)
      }
    }
  }
  // BOTON DELETE ELIMINAR CUENTA
  const handleDelete = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará tu cuenta permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar cuenta',
      cancelButtonText: 'Cancelar'
    })

    if (result.isConfirmed) {
      // Si el usuario confirma, eliminar la cuenta
      const response = await deleteUser(user.id)(dispatch)

      if (response.status === 200) {
        Swal.fire('Usuario eliminado')
        logoutUser(dispatch)
        navigate('/')
      } else {
        Swal.fire('Error al eliminar la cuenta')
        setIsLoading(false)
      }
    }else {
      setIsLoading(false)
    }
  }

    return (
            <div className="container mx-auto px-4 mt-20">
                <div data-loading={isLoading} className="h-fit absolute w-fit top-[50%] left-[42%] data-[loading=true]:flex hidden flex-col items-center gap-2">
                  {
                    isLoading ? <LoadingSpinner /> : null
                  }
                </div>
                <form className="w-full max-w-md data-[loading=true]:opacity-10" data-loading={isLoading}  onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            className="text-gray-600 text-xs mt-1"
                        >
                            Nombre
                        </label>
                        <input
                            className="appearaappearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            maxLength={30}
                            name="name"
                            placeholder="Nombre"
                            value={inputsForm.name}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            className="text-gray-600 text-xs mt-1"
                        >
                            Apellido
                        </label>
                        <input
                            className="appearaappearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            maxLength={30}
                            name="lastName"
                            placeholder="Apellido"
                            value={inputsForm.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.lastName}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            className="text-gray-600 text-xs mt-1"
                        >
                            Correo de tu cuenta
                        </label>
                        <input
                            className="appearaappearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            maxLength={30}
                            name="email"
                            placeholder="Correo electrónico"
                            value={inputsForm.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <p className="font-bold mb-2">CAMBIO DE CONTRASEÑA</p>
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-fadepa text-xs font-bold mb-2"
                            htmlFor="grid-new-password"
                        >
                            Nueva contraseña (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          type="password"
                            maxLength={30}
                            name="newPassword"
                            placeholder="Contraseña Nueva"
                            value={inputsForm.newPassword}
                            onChange={handleChange}
                        />
                        {errors.newPassword && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.newPassword}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            className="block uppercase tracking-wide text-fadepa text-xs font-bold mb-2"
                            htmlFor="grid-confirm-password"
                        >
                            Confirmar nueva contraseña (déjalo en blanco para no cambiarla)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="password"
                            maxLength={30}
                            name="confirmPassword"
                            placeholder="Confirma Contraseña"
                            value={inputsForm.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            name="update"
                            className="bg-fadepa hover:bg-primaryClear text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Guardar cambios
                        </button>
                        <button
                            type="button"
                            name="delete"
                            className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleDelete}
                        >
                            Eliminar Cuenta
                        </button>
                    </div>
                </form>
                <footer style={{ textAlign: 'center', padding: '14.5px' }}></footer>
            </div>
    )
}

export default UpdateUserForm

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postLoginUser } from '@redux/actions/User/postLoginUser'
import { logoutUser } from '@redux/actions/User/logoutUser'
import Swal from 'sweetalert2'
import { Button } from '@components/Controls/Buttons'
import { PlainNavLink } from '@components/Controls/Links'
import { LoadingSpinner } from '@components/Cart/LoadingSpinner'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    const errors = {}

    if (!email.trim()) {
      errors.email = 'El correo electrónico es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'El correo electrónico no es válido'
    }

    if (!password) {
      errors.password = 'La contraseña es obligatoria'
    } else if (password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres'
    }

    if (Object.keys(errors).length === 0) {
      const response = await postLoginUser({ email, password })(dispatch)

      if (response.status === 'fail') {
        Swal.fire({
          icon: 'error',
          text: response.message
        })
        setIsLoading(false)
      } else if (response?.acceso?.user?.active === false) {
        Swal.fire({
          icon: 'error',
          text: 'Usuario no encontrado'
        })
        logoutUser(dispatch)
        navigate('/login/register')
      } else if (response.status === 'success') {
        Swal.fire({
          icon: 'success',
          text: 'Usuario Logueado correctamente'
        })
        navigate('/account')
      }
    } else {
      setErrors(errors)
      setIsLoading(false)
    }
  }

  return (
        <div className="font-sans">
            <div className="relative sm:max-w-sm w-full">
                <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                <div className="card bg-purple-700 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                <div className="relative w-full rounded-3xl  px-16 py-5 bg-gray-100 shadow-md">
                    <label
                        htmlFor=""
                        className="block text-base pt-10 pb-5 text-gray-700 text-center font-semibold"
                    >
                        Iniciar sesión
                    </label>
                    <div data-loading={isLoading} className="h-fit absolute w-fit top-[50%] left-[42%] data-[loading=true]:flex hidden flex-col items-center gap-2">
                      {
                        isLoading ? <LoadingSpinner /> : null
                      }
                      <span>
                        Cargando...
                      </span>
                    </div>
                    <form onSubmit={handleSubmit} className='data-[loading=true]:opacity-10 relative' data-loading={isLoading}>
                        <div>
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={email}
                                maxLength={40}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`mt-1 p-2 text-center block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div className="mt-7">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                maxLength={30}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`mt-1 p-2 text-center block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        <div className="pt-10">
                            <Button
                                variant="primary"
                                type="submit"
                                className="w-full"
                            >
                                Iniciar sesión
                            </Button>
                        </div>
                    </form>
                    <p className="text-gray-400 pt-5 pb-10 text-m data-[loading=true]:opacity-10 relative" data-loading={isLoading}>
                        ¿No tienes una cuenta?
                        <PlainNavLink
                            path="/login/register"
                        >
                            Registrate
                        </PlainNavLink>
                    </p>
                </div>
                <div className="mt-7">
                </div>
            </div>
        </div>
  )
}

export default LoginForm

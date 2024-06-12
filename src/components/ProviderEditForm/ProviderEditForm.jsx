import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { formatAndPut } from './formatAndPut'
import { validation } from './validation'
import { getProviderById } from '@redux/actions/Providers/getProviderById'
import { cleanProvider } from '@redux/actions/Providers/cleanProvider'

const ProviderEditForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const user = useSelector(state => state.user)
  const provider = useSelector(state => state.provider)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(getProviderById(id))
  }, [dispatch, id])

  const [inputsForm, setInputsForm] = useState({
    name: '',
    discount: '',
    markup: '',
    active: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    discount: '',
    markup: '',
    empty: ''
  })
  useEffect(() => {
    if (provider.name) {
      setInputsForm({
        name: provider.name,
        discount: provider.discount,
        markup: provider.markup,
        active: provider.active
      })
    }
  }, [provider])
  useEffect(() => {
    // Simular una carga asincrónica de los datos del usuario
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }, [])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value

    setInputsForm({ ...inputsForm, [property]: value })
    setErrors(validation({ ...inputsForm, [property]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if ((Object.keys(errors).length === 0) || (errors.empty === '')) {
      await formatAndPut(inputsForm, id)
      dispatch(cleanProvider())
      navigate('/admin')
    }
  }

  if (user?.rol !== 'admin') {
    navigate('/')
  } else {
    return (
          <div className="flex flex-col items-center  min-h-screen p-4">
              <form className="flex flex-col border rounded-xl mt-2 mb-2 bg-bgFocus" onSubmit={handleSubmit}
                  encType="multipart/form-data">
                  <h1 className="text-primary uppercase font-bold text-center mt-6">Editar Proveedor</h1>
                  <div className=" flex m-8 pl-2 mb-0">
                      <label className="bg-primaryClear rounded-l-xl w-32 h-8 pl-2 text-white flex items-center justify-center">Nombre</label>
                      <input
                          className="bg-duller rounded-r-lg w-64 h-8 pl-2 text-center"
                          maxLength="25"
                          type='text'
                          name='name'
                          value={inputsForm.name}
                          onChange={handleChange} />
                  </div>
                  <div className="flex my-0 pt-0 pl-8 pl-2 justify-around">
                    {errors.name
                      ? <span className="text-warning text-xs font-extrabold py-0 m-0">{errors.name}</span>
                      : <span className='h-4'></span>}
                  </div>
                  <div className=" flex m-8 pl-2 mb-0">
                      <label className="bg-primaryClear rounded-l-xl w-32 h-8 pl-2 text-white flex items-center justify-center">Descuento</label>
                      <input
                          className="bg-duller rounded-r-lg w-44 h-8 pl-2 text-center"
                          maxLength="5"
                          type='text'
                          name='discount'
                          value={inputsForm.discount}
                          onChange={handleChange} />
                  </div>
                  <div className="flex my-0 pt-0 pl-8 pl-2 justify-around">
                    {errors.discount
                      ? <span className="text-warning text-xs font-extrabold py-0 m-0">{errors.discount}</span>
                      : <span className='h-4'></span>}
                  </div>
                  <div className=" flex m-8 pl-2 mb-0">
                      <label className="bg-primaryClear rounded-l-xl w-32 h-8 pl-2 text-white flex items-center justify-center">Ganancia</label>
                      <input
                          className="bg-duller rounded-r-lg w-44 h-8 pl-2 text-center"
                          maxLength="5"
                          type='text'
                          name='markup'
                          value={inputsForm.markup}
                          onChange={handleChange} />
                  </div>
                  <div className="flex my-0 pt-0 pl-8 pl-2 justify-around">
                    {errors.markup
                      ? <span className="text-warning text-xs font-extrabold py-0 m-0">{errors.markup}</span>
                      : <span className='h-4'></span>}
                  </div>
                  <div className="flex m-8 pl-2 mb-0">
                    <label className="bg-primaryClear rounded-l-xl w-32 h-8 pl-2 text-white flex items-center justify-center">
                      Estado
                    </label>
                    <select
                      className="bg-duller rounded-r-lg w-44 h-8 pl-2 text-center"
                      value={inputsForm.active.toString()}
                      onChange={(event) => setInputsForm({ ...inputsForm, active: event.target.value === 'true' })}
                    >
                      <option value="true">Activo</option>
                      <option value="false">No Activo</option>
                    </select>
                  </div>
                  <div className="flex justify-center mt-4">
                  <button
                      className="bg-fadepa hover:bg-primaryClear text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                      disabled={inputsForm.name === '' || inputsForm.discount === '' || inputsForm.markup === ''}
                  >               
                          Guardar
                  </button>
                  </div>
                  <div className="flex my-0 pt-0 pl-8 pl-2 justify-around">
                    {errors.empty
                      ? <span className="text-warning text-xs font-extrabold py-0 m-0">{errors.empty}</span>
                      : <span className='h-4'></span>}
                  </div>
              </form>
      </div>
    )
  }
}

export default ProviderEditForm

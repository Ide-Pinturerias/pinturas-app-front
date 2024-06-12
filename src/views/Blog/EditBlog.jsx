import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import getPostById from '@redux/actions/Blog/getPostById'
import { useNavigate, useParams } from 'react-router-dom'
import putPost from '@redux/actions/Blog/putPost'
import { validationBlog } from './validationBlog'

const EditBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const user = useSelector(state => state.user)
  const post = useSelector(state => state.post)
  const [errors, setErrors] = useState({})
  const [inputs, setInputs] = useState({
    title: '',
    image: '',
    description: ''
  })

  const handleChange = (event) => {
    const { name, value, type, files } = event.target

    setInputs((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }))

    setErrors(validationBlog({ ...inputs, [name]: type === 'file' ? files[0] : value }))
  }

  useEffect(() => {
    getPostById(id)(dispatch)
  }, [dispatch, id])

  useEffect(() => {
    if (post) {
      setInputs({
        title: post.title,
        image: post.image,
        description: post.description
      })
    }
  }, [post])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (Object.keys(errors).length === 0) {
      const blog = new FormData()
      blog.append('title', inputs.title)
      blog.append('description', inputs.description)
      if (inputs.image !== undefined) {
        blog.append('image', inputs.image)
      }

      const response = await putPost(blog, id)(dispatch)
      if (response.status === 500) {
        Swal.fire({
          icon: 'error',
          text: `Error al actualizar: ${response.data}`
        })
      } else {
        Swal.fire({
          icon: 'success',
          text: 'Blog actualizado'
        })
      }
    }
  }

  if (user.rol !== 'admin') {
    navigate('/')
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <form
          className="max-w-md w-full p-8 border-2 border-solid border-primary rounded-xl bg-bgFocus"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h1 className="text-primary uppercase font-bold text-center mb-6">
            Modifica el posteo
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Título
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type='text'
              maxLength={55}
              name='title'
              value={inputs.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image"
            >
              Imágen
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type='file'
              accept='image/*'
              name='image'
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Cuerpo
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              id="description"
              maxLength={2000}
              name='description'
              rows={5}
              value={inputs.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-fadepa hover:bg-primaryClear text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Modificar Post
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditBlog

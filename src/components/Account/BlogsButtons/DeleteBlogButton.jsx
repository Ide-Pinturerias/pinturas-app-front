import React from 'react'
import deletePost from '@redux/actions/Blog/deletePost'
import { useDispatch } from 'react-redux'

const DeleteBlogButton = ({ idBlog }) => {
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault()
    deletePost(idBlog)(dispatch)
  }
  return (
        <div className="justify-end">
            <button onClick={handleClick} className="bg-red-500 hover:bg-fadepa text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
        </div>
  )
}

export default DeleteBlogButton

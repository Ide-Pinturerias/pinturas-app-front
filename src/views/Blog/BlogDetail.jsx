import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPostById from '@redux/actions/Blog/getPostById'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
  const dispatch = useDispatch()
  const { idBlog } = useParams()
  const post = useSelector((state) => state.post)

  useEffect(() => {
    getPostById(idBlog)(dispatch)
  }, [dispatch, idBlog])

  return (
    <div className=" bg-accentClear min-h-screen flex justify-center items-center" >
      <article className="container mx-auto py-10">
        <header>
          <h1 className="text-4xl font-bold text-primary text-center my-8">{post.title}</h1>
        </header>
        
        <section className="flex justify-center">
          <img
            src={post.image }
            alt="Blog"
            className="w-full max-w-[500px] h-auto object-cover m-4 rounded-md"
          />
        </section>
        
        <section className="my-6 mx-auto px-4 max-w-[800px] text-justify">
          {post.description}
        </section>
      </article>
    </div>
  )
}

export default BlogDetail

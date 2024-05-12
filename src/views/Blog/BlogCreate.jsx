import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postPost from '@redux/actions/Blog/postPost';
import Swal from 'sweetalert2';
import img from '@img/webp/blog.webp';
import { validationBlog } from './validationBlog';
import { Navigate, useNavigate } from 'react-router-dom';

const BlogCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const idUser = user?.id;
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    title: '',
    image: '',
    description: '',
    idUser,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    setInputs((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value,
    }));

    setErrors(validationBlog({ ...inputs, [name]: type === 'file' ? files[0] : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0 && inputs.title !== '' && inputs.description !== '') {
      const blog = new FormData();
      blog.append('title', inputs.title);
      blog.append('description', inputs.description);
      blog.append('image', inputs.image ? inputs.image : img);

      const response = await postPost(blog)(dispatch);
      if (response.status === 'success') {
        Swal.fire({
          icon: 'success',
          text: 'Blog creado',
        });
        navigate('/blog');
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Hubo un error al crear el post',
        });
      }
    }
  };

  if (user.rol !== 'admin') {
    return <Navigate to="/blog" replace />;
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <form
        className="max-w-md w-full p-8 border-2 border-solid border-primary rounded-xl bg-bgFocus"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1 className="text-primary uppercase font-bold text-center mb-6">Crea una entrada de Blog!</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Título
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            maxLength={55}
            value={inputs.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Imágen
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Cuerpo
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="description"
            name="description"
            maxLength={2000}
            rows={5}
            value={inputs.description}
            onChange={handleChange}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-fadepa hover:bg-primaryClear text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Crear Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogCreate;

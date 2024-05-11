import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import postPost from "@redux/actions/Blog/postPost";
import Swal from "sweetalert2";
import img from "@img/webp/blog.webp";
import { validationBlog } from "./validationBlog";
import { Navigate } from "react-router-dom";

const BlogCreate = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const idUser = user?.id;
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    title: "",
    image: "",
    description: "",
    idUser,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    setInputs((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));

    setErrors(validationBlog({ ...inputs, [name]: type === "file" ? files[0] : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      const blog = new FormData();
      blog.append("title", inputs.title);
      blog.append("description", inputs.description);
      blog.append("image", inputs.image ? inputs.image : img);

      const response = await postPost(blog)(dispatch);
      if (response.status === "success") {
        Swal.fire({
          icon: "success",
          text: "Blog creado",
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "Hubo un error al crear el post",
        });
      }
    }
  };

  if (user.rol !== "admin") {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        className="max-w-md w-full p-8 border border-primaryClear rounded-xl bg-hightlight shadow-2xl"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1 className="text-3xl font-extrabold mb-8 text-center">
          Crea una entrada de Blog!
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
            type="text"
            name="title"
            maxLength={55}
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
            type="file"
            accept="image/*"
            name="image"
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
            name="description"
            maxLength={2000}
            rows={5}
            value={inputs.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-primaryClear hover:bg-fadepa text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

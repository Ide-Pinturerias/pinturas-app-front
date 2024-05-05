import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "@redux/actions/Categories/getAllCategories";
import validations from "./validations";
import { formatAndPost } from "./formatAndPost";
import { getProvidersActive } from "@redux/actions/Providers/getProvidersActive";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const providers = useSelector((state) => state.providers);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getProvidersActive());
  }, [dispatch]);

  const [inputsForm, setInputsForm] = useState({
    name: "",
    price: "",
    code: "",
    category: "",
    patent: "",
    color: "",
    package: "",
    stock: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    price: "",
    code: "",
    category: "",
    patent: "",
    image: "",
    color: "",
    package: "",
    stock: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "image") {
      setInputsForm({
        ...inputsForm,
        image: event.target.files[0],
      });
    } else {
      setInputsForm({ ...inputsForm, [property]: value });
    }
    setErrors(validations({ ...inputsForm, [property]: value }));
  };
  // ENVIAR FORMULARIO
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      await formatAndPost(inputsForm, dispatch, navigate);
    }
  };

  if (user?.rol !== "admin") {
    navigate("/");
  } else {
    return (
      <div className="justify-start">
        <h2 className="uppercase font-bold  flex items-center justify-center">
          Crear Producto
        </h2>
        <form
          className="border-2 border-solid border-primary rounded-xl pb-4 bg-bgFocus"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="flex m-8 justify-center mb-0 justify-center">
            <label
              htmlFor="name"
              className="bg-primaryClear text-white rounded-l-xl w-40 h-8  flex items-center justify-center"
            >
              Nombre:
            </label>
            <input
              className="bg-duller rounded-r-lg w-72 h-8 text-center"
              type="text"
              name="name"
              maxLength="50"
              value={inputsForm.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex my-0 pt-0 pl-8 justify-around">
            <p
              className={`text-warning text-xs font-extrabold py-0 m-0 ${
                errors.name ? "block" : "hidden"
              }`}
            >
              {errors.name}
            </p>
          </div>
          <div className={`flex m-8 justify-center mb-0 justify-center ${errors.name ? "mt-4" : "mt-8"}`}>
            <label
              htmlFor="price"
              className="bg-primaryClear text-white rounded-l-xl w-40 h-8  flex items-center justify-center"
            >
              Precio lista:
            </label>
            <input
              className="bg-duller rounded-r-lg w-72 h-8 text-center"
              maxLength="20"
              type="number"
              name="price"
              value={inputsForm.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex my-0 pt-0 pl-8 justify-around">
            {errors.price && (
              <p className="text-warning text-xs font-extrabold py-0 m-0">
                {errors.price}
              </p>
            )}
          </div>

          <div className={`flex m-8 justify-center mb-0 justify-center ${errors.price ? "mt-4" : "mt-8"}`}>
            <label
              htmlFor="code"
              className="bg-primaryClear text-white rounded-l-xl w-40 h-8  flex items-center justify-center"
            >
              Código:
            </label>
            <input
              className="bg-duller rounded-r-lg w-72 h-8 text-center"
              maxLength="25"
              type="text"
              name="code"
              value={inputsForm.code}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex my-0 pt-0 pl-8 justify-around">
            {errors.code && (
              <p className="text-warning text-xs font-extrabold py-0 m-0">
                {errors.code}
              </p>
            )}
          </div>
          <div className={`flex m-8 justify-center mb-0 justify-center ${errors.code ? "mt-4" : "mt-8"}`}>
            <label
              htmlFor="category"
              className="bg-primaryClear text-white rounded-l-xl w-40 h-8  flex items-center justify-center"
            >
              Categoría:
            </label>
            <select
              className="bg-duller rounded-r-lg w-72 h-8"
              value={inputsForm.category}
              onChange={handleInputChange}
              name="category"
            >
              <option style={{ textAlign: "center" }} value="">
                Selecciona una categoria
              </option>
              {categories.map((category, index) => (
                <option key={index} name="category" value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex m-8 justify-center">
            <label
              htmlFor="category"
              className="bg-primaryClear text-white rounded-l-xl w-40 h-8  flex items-center justify-center"
            >
              Proveedor:
            </label>
            <select
              className="bg-duller rounded-r-lg w-72 h-8"
              value={inputsForm.patent}
              onChange={handleInputChange}
              name="patent"
            >
              <option style={{ textAlign: "center" }} value="">
                Selecciona una marca
              </option>
              {providers.map((provider, index) => (
                <option key={index} name="patent" value={provider.name}>
                  {provider.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex m-8 justify-center">
            <label
              htmlFor="file"
              className="bg-primaryClear hover:bg-primaryDark text-white rounded-l-xl w-40 h-8 flex items-center justify-center cursor-pointer"
            >
              Sube imagen
              <input
                className="opacity-0 absolute"
                type="file"
                name="image"
                accept="image/*"
                // value={inputsForm.image}
                onChange={handleInputChange}
              />
            </label>
            <span className="bg-duller rounded-r-lg w-72 h-8 flex items-center px-3">
              {inputsForm.image && `Imagen seleccionada: ${inputsForm.image}`}
            </span>
          </div>
          <div className="flex m-8 justify-center">
            <label
              htmlFor="package"
              className="bg-primaryClear text-white rounded-l-xl w-40 h-8  flex items-center justify-center"
            >
              Package:
            </label>
            <input
              className="bg-duller rounded-r-lg w-72 h-8 text-center"
              maxLength="25"
              type="text"
              name="package"
              value={inputsForm.package}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex m-8 justify-center mb-0 justify-center">
            <label
              htmlFor="stock"
              className="bg-primaryClear text-white rounded-l-xl w-40 h-8  flex items-center justify-center"
            >
              Stock:
            </label>
            <input
              className="bg-duller rounded-r-lg w-72 h-8 text-center"
              maxLength="10"
              type="text"
              name="stock"
              value={inputsForm.stock}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex mt-0 pt-0 pl-8 justify-around">
            {errors.stock && (
              <p className="text-warning text-xs font-extrabold py-0 m-0">
                {errors.stock}
              </p>
            )}
          </div>
          <div className={`flex m-8 justify-center mb-0 justify-center ${errors.stock ? "mt-4" : "mt-8"}`}>
            <label
              htmlFor="color"
              className="bg-primaryClear text-white rounded-l-xl w-40 h-8  flex items-center justify-center"
            >
              Color:
            </label>
            <input
              className="bg-duller rounded-r-lg w-72 h-8 text-center"
              maxLength="25"
              type="text"
              name="color"
              value={inputsForm.color}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex mt-0 pt-0 pl-8 justify-around">
            {errors.color && (
              <p className="text-warning text-xs font-extrabold py-0 m-0">
                {errors.color}
              </p>
            )}
          </div>
            <div className="flex flex-col mt-8 justify-center">
              <label
                htmlFor="description"
                className="bg-primaryClear text-white rounded-t-xl h-8 mx-6 flex items-center justify-center"
              >
                Descripción:
              </label>
              <textarea
                className="bg-duller rounded-b-lg h-40 resize-none mx-6 p-1"
                maxLength="1000"
                name="description"
                value={inputsForm.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex my-0 pt-0 pl-8 justify-around">
              {errors.description && (
                <p className="text-warning text-xs font-extrabold py-0 m-0">
                  {errors.description}
                </p>
              )}
            </div>
          <div
            className={`flex justify-center ${
              errors.description ? "mt-4" : "mt-8"
            }`}
          >
            <button
              type="submit"
              className="bg-fadepa hover:bg-primaryClear text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Crear producto
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default CreateForm;

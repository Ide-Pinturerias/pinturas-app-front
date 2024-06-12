import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProvidersActive } from "@redux/actions/Providers/getProvidersActive";
import { formatAndPut } from "./formatAndPut";
import { useNavigate } from "react-router-dom";
import {LoadingSpinner} from "@components/LoadingSpinner/LoadingSpinner";

const UpdatePricesForm = () => {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providers);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [inputsForm, setInputsForm] = useState({
    provider: "",
    excelFile: "",
  });

  useEffect(() => {
    dispatch(getProvidersActive());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "excelFile") {
      setInputsForm({
        ...inputsForm,
        excelFile: event.target.files[0],
      });
    } else {
      setInputsForm({ ...inputsForm, [property]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (inputsForm.provider !== "" && inputsForm.excelFile !== "") {
      await formatAndPut(inputsForm);
    }
    setIsLoading(false);
    setInputsForm({
      provider: "",
      excelFile: "",
    });
    document.getElementById("excelFile").value = "";
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  if (loading) {
    return <LoadingSpinner/>;
  }

  if (user.rol !== "admin") {
    navigate("/");
  } else {
    return (
      <div className="flex flex-col items-center  min-h-screen p-4">
        <h1 className="text-xl md:text-3xl text-primary mt-10 uppercase font-bold mb-8">
          Actualizar Precios
        </h1>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="max-w-md w-full border-2 border-gray-300 p-4 rounded-lg"
        >
          <div className="flex items-center mb-4">
            <label
              htmlFor="provider"
              className="bg-primaryClear text-white rounded-l-lg px-4 py-2"
            >
              Proveedor
            </label>
            <select
              className="bg-duller rounded-r-lg w-full px-4 py-2"
              value={inputsForm.provider}
              onChange={handleInputChange}
              name="provider"
            >
              <option value="">Selecciona un proveedor</option>
              {providers.map((provider, index) => (
                <option key={index} value={provider.name}>
                  {provider.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 h-36 flex items-center justify-center">
            {isLoading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              <span className="inline-block text-red-500 text-lg text-center">
                * Para actualizar masivamente los productos debes cargar un
                excel donde una columna `codigo` tenga los códigos y otra
                `precio` tenga los precios respectivamente
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="file"
              accept=".xlsx, .xls"
              id="excelFile"
              name="excelFile"
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-duller rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-fadepa hover:bg-primaryClear text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Actualizar precios
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default UpdatePricesForm;

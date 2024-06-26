import { useState } from "react";
import { postRegisterEmail } from "@redux/actions/Mail/postRegisterEmail";
import { postRegisterUser } from "@redux/actions/User/postRegisterUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { welcomeMessage } from "./welcomeMessage";
import Swal from "sweetalert2";
import { Button } from "@components/Controls/Buttons";
import { validation } from "./validation";
import { LoadingSpinner } from "@components/LoadingSpinner/LoadingSpinner";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputsForm, setInputsForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    empty: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputsForm({ ...inputsForm, [name]: value });
    setErrors(validation({ ...inputsForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (Object.keys(errors).length === 0) {
        setIsLoading(true);
        const { status, user } = (await postRegisterUser(inputsForm)(dispatch))
          .data;
        if (status === "success") {
          await postRegisterEmail({
            id: user.id,
            message: welcomeMessage(inputsForm.name),
          })(dispatch);
          Swal.fire({
            icon: "success",
            text: "Usuario registrado correctamente",
          });
          navigate("/login");
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Error al registrar usuario",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans">
      <div className="relative sm:max-w-sm w-full">
        <div className="relative  sm:max-w-sm w-full">
          <div className="card bg-accentClear shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-fadepa shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-20 py-5 bg-gray-100 shadow-md">
            <label
              htmlFor=""
              className="block text-base pt-2 pb-5 text-gray-700 text-center font-semibold"
            >
              Regístrate
            </label>
            <div
              data-loading={isLoading}
              className="h-fit absolute w-fit top-[50%] left-[42%] data-[loading=true]:flex hidden flex-col items-center gap-2"
            >
              {isLoading ? <LoadingSpinner /> : null}
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-60 data-[loading=true]:opacity-10 relative"
              data-loading={isLoading}
            >
              <div>
                <input
                  type="text"
                  placeholder="Nombres"
                  name="name"
                  maxLength={40}
                  value={inputsForm.name}
                  onChange={handleInputChange}
                  className={`text-center mt-1 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className="flex my-0 pt-2 xl:pl-8 pl-2 justify-around">
                  {errors.name ? (
                    <span className="text-warning text-xs py-0 m-0">
                      {errors.name}
                    </span>
                  ) : (
                    <span className="h-4"></span>
                  )}
                </div>
              </div>

              <div className="mt-7">
                <input
                  type="text"
                  placeholder="Apellido"
                  maxLength={40}
                  name="lastName"
                  value={inputsForm.lastName}
                  onChange={handleInputChange}
                  className={`text-center mt-1 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className="flex my-0 pt-2 xl:pl-8 pl-2 justify-around">
                  {errors.lastName ? (
                    <span className="text-warning text-xs py-0 m-0">
                      {errors.lastName}
                    </span>
                  ) : (
                    <span className="h-4"></span>
                  )}
                </div>
              </div>

              <div className="mt-7">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  name="email"
                  maxLength={40}
                  value={inputsForm.email}
                  onChange={handleInputChange}
                  className={`text-center mt-1 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className="flex my-0 pt-2 xl:pl-8 pl-2 justify-around">
                  {errors.email ? (
                    <span className="text-warning text-xs py-0 m-0">
                      {errors.email}
                    </span>
                  ) : (
                    <span className="h-4"></span>
                  )}
                </div>
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  maxLength={30}
                  value={inputsForm.password}
                  onChange={handleInputChange}
                  className={`text-center mt-1 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className="flex my-0 pt-2 xl:pl-8 pl-2 justify-around">
                  {errors.password ? (
                    <span className="text-warning text-xs py-0 m-0">
                      {errors.password}
                    </span>
                  ) : (
                    <span className="h-4"></span>
                  )}
                </div>
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  name="confirmPassword"
                  maxLength={30}
                  value={inputsForm.confirmPassword}
                  onChange={handleInputChange}
                  className={`text-center mt-1 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <div className="flex my-0 pt-2 xl:pl-8 pl-2 justify-around">
                  {errors.confirmPassword ? (
                    <span className="text-warning text-xs py-0 m-0">
                      {errors.confirmPassword}
                    </span>
                  ) : (
                    <span className="h-4"></span>
                  )}
                </div>
              </div>

              <div className=" pt-8">
                <Button variant="primary" type="submit" className="w-full">
                  Registrarse
                </Button>
              </div>
              <div className="w-64 mt-4">
                <span className="mt-2 text-xs text-justify text-gray-400">
                  Tu contraseña debe tener al menos 8 caracteres, una mayúscula,
                  una minúscula y un número
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

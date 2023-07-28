import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import login from "../../img/login-img.jpeg";

const Dashboard = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const cardStyle = {
    maxWidth: "400px",
    width: "100%",
    justifyContent: "center",
  };

  if (!isAuthenticated) {
    return (
      <div style={containerStyle}>
        <div
          className="max-w-sm border-gray-200 rounded-lg shadow dark:bg-purple-700 dark:border-gray-700"
          style={cardStyle}
        >
          <a href="#">
            <img className="rounded-t-lg" src={login} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-white">
                ¡Inicia sesión y explora!
              </h5>
            </a>
            <p className="mb-3 font-normal dark:text-white">
              Despierta tu creatividad con nuestras pinturas de alta calidad.
              Sumérgete en un universo de colores. ¡Inicia sesión ahora y
              comienza a pintar!
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <button onClick={() => loginWithRedirect()}>
                Iniciar Sesión
              </button>
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
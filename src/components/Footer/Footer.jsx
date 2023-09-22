import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logoIde.png'
import mercadopago from '../../img/mercadopago.png'

const Footer = () => {
  return (
    <div className="w-full h-56 flex flex-col items-center justify-evenly bg-purple-800">
      <div className="w-full h-56 flex items-center justify-evenly">
        <div className="hidden sm:block">
          <NavLink to="/">
            <img
              src={logo}
              alt="logo Ide Pinturerias"
              className="w-40 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </NavLink>
        </div>
        <div className="flex items-center flex-col md:flex-row">
          <div className="flex items-center p-5">
            <a
              href="https://www.facebook.com/ide.pintureria/"
              className="w-8 h-8 mx-2 flex items-center justify-center bg-white bg-opacity-20 rounded-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="25"
                viewBox="0 0 13 25"
                fill="none"
              >
                <path
                  d="M10.7189 4.89311H12.8845V1.13988C11.836 1.02817 10.7824 0.973011 9.72824 0.974645C6.59501 0.974645 4.45243 2.93388 4.45243 6.52187V9.61416H0.916016V13.8159H4.45243V24.5799H8.69151V13.8159H12.2164L12.7463 9.61416H8.69151V6.93497C8.69151 5.69569 9.01405 4.89311 10.7189 4.89311Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ide.pintureria.ok/"
              className="w-8 h-8 mx-2 flex items-center justify-center bg-white bg-opacity-20 rounded-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M18.4031 3.979C18.1311 3.979 17.8651 4.05994 17.6389 4.21157C17.4127 4.36321 17.2365 4.57873 17.1323 4.8309C17.0282 5.08306 17.001 5.36053 17.0541 5.62822C17.1071 5.89592 17.2381 6.14181 17.4305 6.33481C17.6229 6.5278 17.8679 6.65924 18.1348 6.71248C18.4016 6.76573 18.6781 6.7384 18.9295 6.63395C19.1808 6.5295 19.3956 6.35263 19.5467 6.12569C19.6979 5.89875 19.7785 5.63194 19.7785 5.359C19.7785 4.993 19.6336 4.64199 19.3757 4.38319C19.1177 4.12439 18.7679 3.979 18.4031 3.979ZM23.6756 6.762C23.6533 5.80784 23.4752 4.86381 23.1484 3.9675C22.8569 3.2006 22.4033 2.50617 21.8188 1.932C21.2512 1.34254 20.5575 0.890303 19.79 0.6095C18.899 0.271585 17.957 0.0887915 17.0047 0.0689999C15.7897 -6.42613e-08 15.4 0 12.2824 0C9.16468 0 8.77497 -6.42613e-08 7.56 0.0689999C6.60768 0.0887915 5.66571 0.271585 4.77472 0.6095C4.00868 0.893146 3.31552 1.34499 2.74594 1.932C2.15842 2.50145 1.70768 3.19751 1.4278 3.9675C1.091 4.86144 0.908811 5.80653 0.889085 6.762C0.820312 7.981 0.820312 8.372 0.820312 11.5C0.820312 14.628 0.820312 15.019 0.889085 16.238C0.908811 17.1935 1.091 18.1386 1.4278 19.0325C1.70768 19.8025 2.15842 20.4985 2.74594 21.068C3.31552 21.655 4.00868 22.1069 4.77472 22.3905C5.66571 22.7284 6.60768 22.9112 7.56 22.931C8.77497 23 9.16468 23 12.2824 23C15.4 23 15.7897 23 17.0047 22.931C17.957 22.9112 18.899 22.7284 19.79 22.3905C20.5575 22.1097 21.2512 21.6575 21.8188 21.068C22.4059 20.496 22.8599 19.8009 23.1484 19.0325C23.4752 18.1362 23.6533 17.1922 23.6756 16.238C23.6756 15.019 23.7444 14.628 23.7444 11.5C23.7444 8.372 23.7444 7.981 23.6756 6.762ZM21.6125 16.1C21.6041 16.83 21.4723 17.5533 21.2228 18.239C21.0397 18.7395 20.7458 19.1917 20.3631 19.5615C19.9913 19.9416 19.5415 20.2359 19.045 20.424C18.3615 20.6744 17.6406 20.8066 16.913 20.815C15.7668 20.8725 15.3427 20.884 12.3282 20.884C9.31369 20.884 8.88959 20.884 7.74339 20.815C6.98791 20.8292 6.23567 20.7125 5.51975 20.47C5.04497 20.2723 4.6158 19.9787 4.25893 19.6075C3.87849 19.2381 3.58822 18.7855 3.41074 18.285C3.1309 17.5894 2.97569 16.8497 2.95225 16.1C2.95225 14.95 2.88348 14.5245 2.88348 11.5C2.88348 8.4755 2.88348 8.05 2.95225 6.9C2.95739 6.15371 3.09318 5.41414 3.35343 4.715C3.55521 4.2296 3.86494 3.79691 4.25893 3.45C4.60716 3.05459 5.03753 2.74056 5.51975 2.53C6.21842 2.27705 6.9548 2.14484 7.69754 2.139C8.84375 2.139 9.26784 2.07 12.2824 2.07C15.2969 2.07 15.721 2.07 16.8672 2.139C17.5948 2.14737 18.3156 2.27958 18.9991 2.53C19.52 2.72395 19.9875 3.03927 20.3631 3.45C20.7387 3.80326 21.0322 4.23514 21.2228 4.715C21.4775 5.41527 21.6094 6.15455 21.6125 6.9C21.6698 8.05 21.6812 8.4755 21.6812 11.5C21.6812 14.5245 21.6698 14.95 21.6125 16.1ZM12.2824 5.6005C11.1199 5.60277 9.98418 5.9507 9.01872 6.60033C8.05326 7.24996 7.30139 8.17213 6.8581 9.25032C6.41481 10.3285 6.3 11.5143 6.52818 12.658C6.75635 13.8016 7.31727 14.8517 8.14006 15.6756C8.96285 16.4995 10.0106 17.0603 11.1509 17.287C12.2912 17.5137 13.4729 17.3962 14.5467 16.9493C15.6204 16.5025 16.5381 15.7463 17.1837 14.7764C17.8293 13.8065 18.1738 12.6663 18.1739 11.5C18.1754 10.7239 18.0239 9.9551 17.7283 9.2379C17.4326 8.5207 16.9985 7.86923 16.451 7.32096C15.9034 6.77269 15.2533 6.33843 14.5379 6.04317C13.8225 5.74791 13.0559 5.59747 12.2824 5.6005ZM12.2824 15.3295C11.5275 15.3295 10.7895 15.1049 10.1618 14.6841C9.53415 14.2633 9.04493 13.6652 8.75604 12.9655C8.46715 12.2657 8.39156 11.4958 8.53884 10.7529C8.68611 10.0101 9.04963 9.3277 9.58343 8.79213C10.1172 8.25657 10.7973 7.89184 11.5377 7.74408C12.2781 7.59632 13.0456 7.67216 13.743 7.962C14.4404 8.25185 15.0366 8.74269 15.456 9.37244C15.8754 10.0022 16.0992 10.7426 16.0992 11.5C16.0992 12.0029 16.0005 12.5009 15.8087 12.9655C15.6169 13.4301 15.3357 13.8523 14.9813 14.2079C14.6269 14.5635 14.2061 14.8455 13.743 15.038C13.2799 15.2304 12.7836 15.3295 12.2824 15.3295Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/ide.pintureria/"
              className="w-8 h-8 mx-2 flex items-center justify-center bg-white bg-opacity-20 rounded-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M0.65332 3.49896C0.65332 2.73314 0.912498 2.10135 1.43083 1.60359C1.94917 1.10581 2.62302 0.856934 3.45236 0.856934C4.26691 0.856934 4.92592 1.10198 5.42946 1.5921C5.9478 2.09754 6.20697 2.75611 6.20697 3.56788C6.20697 4.30305 5.95522 4.91568 5.45168 5.40581C4.93334 5.91124 4.25209 6.16395 3.40793 6.16395H3.38572C2.57118 6.16395 1.91216 5.91124 1.40862 5.40581C0.905079 4.90038 0.65332 4.26475 0.65332 3.49896ZM0.94211 23.6013V8.25459H5.87376V23.6013H0.94211ZM8.60615 23.6013H13.5378V15.032C13.5378 14.4959 13.597 14.0823 13.7155 13.7914C13.9228 13.2706 14.2376 12.8303 14.6596 12.4703C15.0817 12.1104 15.6112 11.9305 16.248 11.9305C17.9067 11.9305 18.736 13.0868 18.736 15.3995V23.6013H23.6677V14.8022C23.6677 12.5354 23.1493 10.8162 22.1126 9.64453C21.076 8.47285 19.7061 7.88701 18.0029 7.88701C16.0925 7.88701 14.6041 8.73705 13.5378 10.4371V10.4831H13.5156L13.5378 10.4371V8.25459H8.60615C8.63577 8.7447 8.65058 10.2686 8.65058 12.8264C8.65058 15.3842 8.63577 18.9758 8.60615 23.6013Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/ide.pintureria/"
              className="w-8 h-8 mx-2 flex items-center justify-center bg-white bg-opacity-20 rounded-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="21"
                viewBox="0 0 27 21"
                fill="none"
              >
                <path
                  d="M26.8465 2.51594C25.8668 2.93655 24.8308 3.21459 23.7706 3.34143C24.8891 2.68016 25.7273 1.63987 26.1297 0.41352C25.0786 1.03272 23.928 1.46898 22.7279 1.70335C21.9257 0.842481 20.8575 0.269441 19.6908 0.0741029C18.5241 -0.121235 17.3249 0.0721772 16.2812 0.624006C15.2375 1.17584 14.4085 2.05487 13.924 3.12324C13.4396 4.19161 13.3271 5.38889 13.6044 6.52731C11.4791 6.42093 9.4003 5.87331 7.50289 4.92C5.60547 3.9667 3.93193 2.62905 2.59097 0.993942C2.12064 1.80675 1.87349 2.72724 1.87412 3.66389C1.87245 4.53373 2.08815 5.39048 2.50202 6.15786C2.91589 6.92524 3.51508 7.57944 4.24624 8.06221C3.39642 8.03932 2.56475 7.81366 1.82199 7.40439V7.46889C1.82836 8.68763 2.25991 9.8668 3.04365 10.8069C3.82738 11.747 4.9152 12.3904 6.12308 12.6282C5.65811 12.7682 5.17537 12.8421 4.68938 12.8475C4.35297 12.8436 4.0174 12.8134 3.68579 12.7572C4.02976 13.8056 4.69541 14.7218 5.5901 15.3783C6.4848 16.0349 7.56404 16.3991 8.67767 16.4203C6.79718 17.8846 4.47548 18.6838 2.08266 18.6904C1.64699 18.6918 1.21167 18.666 0.779297 18.613C3.22235 20.174 6.0694 21.0027 8.97744 20.9992C10.9842 21.0198 12.975 20.6445 14.8336 19.8952C16.6922 19.1459 18.3812 18.0376 19.8021 16.6351C21.223 15.2325 22.3473 13.5638 23.1092 11.7265C23.8711 9.88915 24.2555 7.91997 24.2398 5.93399C24.2398 5.71472 24.2398 5.48255 24.2398 5.25038C25.2625 4.49558 26.1446 3.57028 26.8465 2.51594Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="flex items-center p-5">
            <NavLink
              to="/products"
              className="font-sans mx-2 text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"
            >
              {' '}
              PRODUCTOS{' '}
            </NavLink>{' '}
            <p className="text-white"> | </p>
            <NavLink
              to="/about"
              className="font-sans mx-2 text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"
            >
              {' '}
              EMPRESA{' '}
            </NavLink>
            <p className="text-white"> | </p>
            <NavLink
              to="/location"
              className="font-sans mx-2 text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"
            >
              {' '}
              UBICACION{' '}
            </NavLink>
            <p className="text-white"> | </p>
            <NavLink
              to="/contact"
              className="font-sans mx-2 text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"
            >
              {' '}
              CONTACTO{' '}
            </NavLink>
          </div>
        </div>
        <div className="hidden sm:block">
          <img src={mercadopago} alt="logo Mercado Pago" className="w-24" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center ms:justify-start space-x-1 mb-6">
        <p className="font-sans mx-2 text-white">
          {' '}
          © Copyright 2023. Todos los derechos reservados a{' '}
        </p>
        <NavLink
          to="/developers"
          className="font-sans mx-2 font-bold text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        >
          {' '}
          Work Team Developers{' '}
        </NavLink>
      </div>
    </div>
  )
}

export default Footer

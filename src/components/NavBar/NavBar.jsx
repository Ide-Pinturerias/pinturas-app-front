import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@img/logo-black.png'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import SearchBar from '@components/SearchBar/SearchBar'

import { Cart, UserIcon } from '../SVG'

const Nav = () => {
  const userBd = useSelector((state) => state.user)

  const { isAuthenticated, user } = useAuth0()

  // Menu para las opciones: INICIAR SESION, REGISTRARSE
  const [credentialsMenu, setCredentialsMenu] = useState(false)

  const linkStl = 'relative cursor-pointer hover:text-white transition-colors before:-z-10 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%+1vw+0.25rem)] before:h-[125%] before:bg-orange before:rounded-[15px] before:opacity-0 hover:before:opacity-100 before:transition-opacity'

  // Detectar click fuera del menu.
  const credentialsMenuRef = useRef(null)
  const handleOutsideClick = (event) => {
    if (credentialsMenu && credentialsMenuRef.current && !credentialsMenuRef.current.contains(event.target)) {
      setCredentialsMenu(false)
    };
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [credentialsMenu])

  return (
        <header className="z-50 fixed flex justify-center items-center w-[85%] mx-[7.5%] my-4 h-[3.25rem] rounded-[16px] bg-[#F7F7F290] border-orange border backdrop-blur-md text-[clamp(0.75rem,calc(.8vw+0.25rem),3rem)]">
            {/* NAV LINKS */}
            <nav className="flex justify-evenly w-[calc((100%-5rem)/2)]">
                <NavLink to="/products" className={linkStl}>
                    PRODUCTOS
                </NavLink>
                <NavLink to="/contact" className={linkStl}>
                    CONTACTO
                </NavLink>
                <NavLink to="/about" className={linkStl}>
                    NOSOTROS
                </NavLink>
                <NavLink to="/blog" className={linkStl}>
                    <p>BLOG</p>
                </NavLink>
            </nav>

            {/* LOGO */}
            <NavLink to="/">
                <img
                    src={logo}
                    alt="logo Ide Pinturerias"
                    className="my-4 w-[3.25rem] object-contain cursor-pointer"
                />
            </NavLink>

            {/* NAV LINKS */}
            <nav className="flex justify-around w-[calc((100%-5rem)/2)]">
                <SearchBar />
                <div className="font-mono flex justify-center items-center cursor-pointer">
                    <NavLink
                        to="/cart"
                        className="h-5 hidden sm:block"
                    >
                        <Cart />
                    </NavLink>
                </div>
                <div
                    className="relative flex justify-center items-center"
                    onClick={(e) => { setCredentialsMenu(true); e.stopPropagation() }}
                >
                    {
                        (!userBd.id && !isAuthenticated)
                          ? (
                            <NavLink
                                // to="/account"
                                className="h-5 hidden sm:block cursor-pointer"
                            >
                                <UserIcon />
                            </NavLink>

                        // Existe ID en redux
                            )
                          : userBd.id
                            ? (
                            <NavLink
                                to="/account"
                                className="h-5 hidden sm:block cursor-pointer"
                            >
                                <UserIcon />
                                {userBd.name}
                            </NavLink>

                          // El usuario esta autenticado
                              )
                            : isAuthenticated
                              ? (
                            <NavLink
                                to="/account"
                                className="h-5 hidden sm:block cursor-pointer"
                            >
                                <UserIcon />
                                {user.name} {user.lastName}
                            </NavLink>
                                )
                              : null
                    }
                    <div ref={credentialsMenuRef} className={`${credentialsMenu ? 'opacity-100 visible transition-all' : 'opacity-0 invisible transition-all'} absolute top-[110%] right-0 flex flex-col gap-2 items-start p-4 bg-primary rounded-lg shadow-credentialsMenu`}>
                        <button className={'py-[0.2rem] px-2 w-full rounded-[5px] hover:bg-turquoise text-white text-start whitespace-nowrap transition-colors'}>INICIAR SESIÓN</button>
                        <button className={'py-[0.2rem] px-2 w-full rounded-[5px] hover:bg-turquoise text-white text-start whitespace-nowrap transition-colors'}>REGISTRARSE</button>
                    </div>
                </div>
            </nav>
        </header>
  )
}

export default Nav

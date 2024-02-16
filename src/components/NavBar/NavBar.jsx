import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@img/logo-black.png'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
// import SearchBar from '@components/SearchBar/SearchBar'

import { Magnifier, Cart, Bookmark, UserIcon } from '../SVG'

const Nav = () => {
    const userBd = useSelector((state) => state.user)

    const { isAuthenticated, user } = useAuth0()

    // Menu para las opciones: INICIAR SESION, REGISTRARSE
    const [credentialsMenu, setCredentialsMenu] = useState(false)

    const linkStl = 'relative flex items-center gap-2 py-[.5rem] px-[1em] bg-transparent rounded-[8px] capitalize cursor-pointer transition-colors hover:text-primaryVisible hover:fill-primaryVisible hover:bg-primaryClear'

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
        <header className="z-50 fixed flex justify-between items-center w-[93%] mx-[3.5%] my-4 h-[3.25rem] rounded-[16px] bg-bgFocus bg-opacity-75 border backdrop-blur-md text-[clamp(0.75rem,calc(.8vw+0.3rem),3rem)] font-secondary">
            {/* NAV LINKS */}
            <nav className="w-[calc((95%-5rem)/2)]">
                <ul className="flex justify-evenly w-full">
                    <li>
                        <NavLink to="/products" className={linkStl}>
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={linkStl}>
                            Contacto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={linkStl}>
                            Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={linkStl}>
                            <p>Blog</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* LOGO */}
            <NavLink to="/">
                <img
                    src={logo}
                    alt="logo Ide Pinturerias"
                    className="w-[3.25rem] object-contain cursor-pointer"
                />
            </NavLink>

            {/* NAV LINKS */}
            <nav className="flex justify-around w-[calc((95%-5rem)/2)]">
                <button className={linkStl}>
                    <Magnifier size={".75rem"} />
                    Buscar
                </button>
                <div className="font-mono flex justify-center items-center cursor-pointer">
                    <NavLink
                        to="/cart"
                        className={linkStl}
                    >
                        <Cart size={"1rem"} />
                        Carrito
                    </NavLink>
                </div>
                <div className="font-mono flex justify-center items-center cursor-pointer">
                    <NavLink
                        to="/cart"
                        className={linkStl}
                    >
                        <Bookmark size={".75rem"} />
                        Favoritos
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
                                    className={linkStl}
                                >
                                    <UserIcon size={".75rem"} />
                                    Cuenta
                                </NavLink>

                                // Existe ID en redux
                            )
                            : userBd.id
                                ? (
                                    <NavLink
                                        to="/account"
                                        className={linkStl}
                                    >
                                        <UserIcon size={".75rem"} />
                                        Cuenta
                                        {/* {userBd.name} */}
                                    </NavLink>

                                    // El usuario esta autenticado
                                )
                                : isAuthenticated
                                    ? (
                                        <NavLink
                                            to="/account"
                                            className={linkStl}
                                        >
                                            <UserIcon size={".75rem"} />
                                            Cuenta
                                        </NavLink>
                                    )
                                    : null
                    }
                    <div ref={credentialsMenuRef} className={`${credentialsMenu ? 'opacity-100 visible transition-all' : 'opacity-0 invisible transition-all'} absolute top-[110%] right-0 flex flex-col gap-2 items-start p-4 bg-primaryClear rounded-lg shadow-credentialsMenu`}>
                        <button className={'py-[0.2rem] px-2 w-full rounded-[5px] hover:bg-accentClear text-white text-start whitespace-nowrap transition-colors'}>INICIAR SESIÓN</button>
                        <button className={'py-[0.2rem] px-2 w-full rounded-[5px] hover:bg-accentClear text-white text-start whitespace-nowrap transition-colors'}>REGISTRARSE</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav

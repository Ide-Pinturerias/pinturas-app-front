import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@img/logo-black.png'
import { useSelector } from 'react-redux'
import SearchBar from '@components/SearchBar/SearchBar'

import { Magnifier, Cart, Bookmark, UserIcon } from '../SVG'

function NavBar () {
  // STATES:
  // Estado que se activa luego de clickear en el botón de buscar. Se desactiva en el componente <SearchBar/>.
  const [searchOn, setSearchOn] = useState(false)

  // Menu para las opciones: INICIAR SESION, REGISTRARSE
  const [credentialsMenu, setCredentialsMenu] = useState(false)

  // STYLES:
  const linkStl = 'relative flex items-center gap-2 py-[.5rem] px-[1em] bg-transparent rounded-[8px] capitalize cursor-pointer transition-colors hover:text-primaryVisible hover:fill-primaryVisible hover:bg-primaryClear'

  // FUNCTIONS:
  // Detectar click fuera del menu.
  const credentialsMenuRef = useRef(null)
  const handleOutsideClick = (event) => {
    if (credentialsMenu && credentialsMenuRef.current && !credentialsMenuRef.current.contains(event.target)) {
      setCredentialsMenu(false)
    };
  }
  // Activar/desactivar modo búsqueda en la barra de navegación.
  const toggleSearch = () => setSearchOn((prev) => !prev)

  // LIFE-CYCLES:
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [credentialsMenu])

  useEffect(() => {
    console.log(searchOn)
  }, [searchOn])

  // COMPONENT:
  return (
        <header className={`z-50 fixed w-[93%] mx-[3.5%] my-4 h-[3.25rem] rounded-[16px] bg-bgFocus bg-opacity-75 border text-[clamp(0.75rem,calc(.8vw+0.3rem),3rem)] font-secondary back ${searchOn ? 'backdrop-blur-2xl' : 'backdrop-blur-md'}`}>
            {
                searchOn ? (
                    <SearchBar toggleSearch={toggleSearch} />
                ) : (
                    <div className="flex justify-between items-center size-full">
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
                                src={logo} alt="Logo Ide Pinturerias."
                                className="w-[3.25rem] object-contain cursor-pointer"
                            />
                        </NavLink>

                        {/* NAV LINKS */}
                        <nav className="flex justify-around w-[calc((95%-5rem)/2)]">
                            <button
                                className={linkStl}
                                onClick={toggleSearch}
                            >
                                <Magnifier size={'.75rem'} />
                                Buscar
                            </button>
                            <div className="font-mono flex justify-center items-center cursor-pointer">
                                <NavLink
                                    to="/cart"
                                    className={linkStl}
                                >
                                    <Cart size={'1rem'} />
                                    Carrito
                                </NavLink>
                            </div>
                            <div className="font-mono flex justify-center items-center cursor-pointer">
                                <NavLink
                                    to="/bookmarks"
                                    className={linkStl}
                                >
                                    <Bookmark size={'.75rem'} />
                                    Favoritos
                                </NavLink>
                            </div>
                            <div
                                className="relative flex justify-center items-center"
                                onClick={(e) => { setCredentialsMenu(true); e.stopPropagation() }}
                            >
                                <NavLink
                                    to="/account"
                                    className={linkStl}
                                >
                                    <UserIcon size={'.75rem'} />
                                    Cuenta
                                </NavLink>
                                <div ref={credentialsMenuRef} className={`${credentialsMenu ? 'opacity-100 visible transition-all' : 'opacity-0 invisible transition-all'} absolute top-[110%] right-0 flex flex-col gap-2 items-start p-4 bg-primaryClear rounded-lg shadow-credentialsMenu`}>
                                    <button className={'py-[0.2rem] px-2 w-full rounded-[5px] hover:bg-accentClear text-white text-start whitespace-nowrap transition-colors'}>INICIAR SESIÓN</button>
                                    <button className={'py-[0.2rem] px-2 w-full rounded-[5px] hover:bg-accentClear text-white text-start whitespace-nowrap transition-colors'}>REGISTRARSE</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                )
            }
        </header>
  )
}

export default NavBar

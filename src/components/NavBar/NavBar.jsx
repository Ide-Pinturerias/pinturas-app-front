import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '@img/logo-black.png'
import SearchBar from '@components/SearchBar/SearchBar'
import { Magnifier, Cart, Bookmark, UserIcon } from '@svg'

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
                                    <Link to="/products" className={linkStl}>
                                        Productos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className={linkStl}>
                                        Contacto
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className={linkStl}>
                                        Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog" className={linkStl}>
                                        <p>Blog</p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* LOGO */}
                        <Link to="/">
                            <img
                                width={52} height={31}
                                src={logo} alt="Logo Ide Pinturerias."
                                className="w-[3.25rem] object-contain cursor-pointer"
                            />
                        </Link>

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
                                <Link
                                    to="/cart"
                                    className={linkStl}
                                >
                                    <Cart size={'1rem'} />
                                    Carrito
                                </Link>
                            </div>
                            <div className="font-mono flex justify-center items-center cursor-pointer">
                                <Link
                                    to="/bookmarks"
                                    className={linkStl}
                                >
                                    <Bookmark size={'.75rem'} />
                                    Favoritos
                                </Link>
                            </div>
                            <div
                                className="relative flex justify-center items-center"

                            >
                                <Link
                                    to="/account"
                                    className={linkStl}
                                >
                                    <UserIcon size={'.75rem'} />
                                    Cuenta
                                </Link>

                            </div>
                        </nav>
                    </div>
                )
            }
        </header>
  )
}

export default NavBar

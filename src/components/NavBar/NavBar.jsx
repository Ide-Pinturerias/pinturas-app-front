import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@img/logo-black.png';
import { Cart, UserIcon } from '@svg';

function NavBar() {
    const [credentialsMenu, setCredentialsMenu] = useState(false);
    const credentialsMenuRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (credentialsMenu && credentialsMenuRef.current && !credentialsMenuRef.current.contains(event.target)) {
            setCredentialsMenu(false);
        };
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, [credentialsMenu]);

    const linkStl = 'relative flex items-center gap-2 py-[.5rem] px-[1em] bg-transparent rounded-[8px] capitalize cursor-pointer transition-colors hover:text-primaryVisible hover:fill-primaryVisible hover:bg-primaryClear';

    return (
        <header className={`z-50 fixed w-full top-0 left-0 px-4 py-4 h-auto bg-bgFocus bg-opacity-75 border font-secondary backdrop-blur-md transition-all duration-300 ease-in-out`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* LEFT NAV LINKS */}
                <nav className="flex items-center space-x-4">
                    <Link to="/about" className={linkStl}>Nosotros</Link>
                    <Link to="/contact" className={linkStl}>Contacto</Link>
                    <Link to="/blog" className={linkStl}>Blog</Link>
                </nav>

                {/* CENTER LOGO */}
                <div>
                    <Link to="/" className="shrink-0">
                        <img src={logo} alt="Logo" className="w-16" />
                    </Link>
                </div>

                {/* RIGHT NAV LINKS */}
                <nav className="flex items-center space-x-4">
                    <Link to="/products" className={linkStl}>Productos</Link>
                    <Link to="/cart" className={linkStl}><Cart size={'1rem'} /> Carrito</Link>
                    <Link to="/account" className={linkStl}><UserIcon size={'0.75rem'} /> Cuenta</Link>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;

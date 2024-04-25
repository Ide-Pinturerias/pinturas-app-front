import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@img/logo-black.png';
import { Cart, UserIcon, MenuIcon } from '@svg';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleOutsideClick = (event) => {
    if (isMenuOpen && !event.target.closest('#navbar')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [isMenuOpen]);

  const linkStl = 'relative flex items-center gap-2 py-2 px-4 bg-transparent rounded capitalize cursor-pointer hover:bg-primaryClear';
  const activeLinkStl = 'bg-primaryVisible';

  const navLinks = [
    { path: '/products', label: 'products' },
    { path: '/blog', label: 'blog' },
    { path: '/about', label: 'about' },
    { path: '/contact', label: 'contact' },
    { path: '/cart', label: <><Cart size={'1rem'} /> Carrito</> },
    { path: '/account', label: <><UserIcon size={'0.75rem'} /> Cuenta</> }
  ];

  return (
    <header id="navbar" className="fixed w-full top-0 left-0 px-4 py-4 bg-bgFocus bg-opacity-75 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={toggleMenu} className="text-2xl md:hidden mr-2">
          <MenuIcon />
        </button>
        <div className="flex-grow flex justify-center md:justify-start">
          <Link to="/" className="shrink-0">
            <img src={logo} alt="Logo" className="w-16" />
          </Link>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent z-20`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 items-center text-center">
            {navLinks.map(({ path, label }, index) => {
              const isActive = location.pathname === path;
              return (
                <li key={index}>
                  <Link to={path} className={`${linkStl} ${isActive ? activeLinkStl : ''}`} onClick={() => setIsMenuOpen(false)}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

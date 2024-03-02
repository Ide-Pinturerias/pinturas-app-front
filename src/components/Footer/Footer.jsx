import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from '@svg'
import ide from '@images/logo/ide.png'
import mercadopago from '@images/logo/mercadopago.png'
import { PlainNavLink, PlainExternalLink } from '@components/controls/Links'

const Footer = () => {
    const SOCIAL_MEDIA = [
        { icon: Facebook, link: 'https://www.facebook.com/ide.pintureria/' },
        { icon: Instagram, link: 'https://www.instagram.com/ide.pintureria.ok/' },
        { icon: Linkedin, link: 'https://www.linkedin.com/ide.pintureria/' },
        { icon: Twitter, link: 'https://twitter.com/ide.pintureria/' }
    ]

    const NAV_LINKS_1 = [
        { text: 'Impermeabilizantes', link: '/products?category=Linea Impermeabilizantes' },
        { text: 'Productos especiales', link: '/products?category=Linea Productos Especiales' },
        { text: 'Latex', link: '/products?category=Linea Latex' },
        { text: 'Fijadores y aditivos', link: '/products?category=Linea Fijadores - Aditivos' },
        { text: 'Maderas', link: '/products?category=Linea Maderas' },
        { text: 'Productos auxiliares', link: '/products?category=Linea Productos Auxiliares' },
        { text: 'Emaltes', link: '/products?category=Linea Emaltes' },
        { text: 'Esmaltes industriales', link: '/products?category=Linea Esmaltes Industriales' },
        { text: 'Pinturas a la cal', link: '/products?category=Linea Pinturas a la cal' },
        { text: 'Entonadores y tintas', link: '/products?category=Linea Entonadores y Tintas' },
        { text: 'Fondos', link: '/products?category=Linea Fondos' },
        { text: 'Ecológica', link: '/products?category=Linea Ecologica' },
        { text: 'Ver todos los productos', link: '/products' }
    ]

    const NAV_LINKS_2 = [
        { text: 'Nosotros', link: '/about' },
        { text: 'Contacto', link: '/contact' },
        { text: 'Blog', link: '/blog' },
        { text: 'Preguntas fecuentes', link: '/blog' }
    ]

    return (
        <footer className="flex items-center justify-center w-full bg-primaryClear">
            <div className="flex flex-col justify-between items-center gap-[50px] m-sides max-w-maxSc w-maxIn mt-[50px] mb-[25px]">
                <div className="flex justify-between items-start gap-[6%] w-full">
                    <div className="flex flex-col items-start text-clear">
                        {/* LOGO */}
                        <PlainNavLink path="/">
                            <img
                                src={ide}
                                alt="IdePinturerias logo."
                                className="w-[13rem] aspect-[500/293] cursor-pointer brightness-0 select-none"
                            />
                        </PlainNavLink>
                        {/* SOCIAL MEDIA */}
                        <div className="w-full mt-[30px]">
                            <div className="font-bold uppercase text-black">Redes sociales</div>
                            <ul className="flex justify-between gap-2 w-full mt-[10px]">
                                {
                                    SOCIAL_MEDIA.map((item, idx) => (
                                        <li key={idx}>
                                            <PlainExternalLink path={item.link} icon={true} >
                                                <item.icon />
                                            </PlainExternalLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* CONTACT */}
                        <div className="w-full mt-[30px]">
                            <div className="font-bold uppercase text-black">Soporte</div>
                            <ul className="mt-[10px]">
                                <li><PlainExternalLink path='tel:+543513061350'>+54 351 306 1350</PlainExternalLink></li>
                                <li><PlainExternalLink path='mailto:idepintureria@gmail.com'>idepintureria@gmail.com</PlainExternalLink></li>
                            </ul>
                        </div>
                    </div>
                    {/* CATEGORIAS */}
                    <nav className="text-clear">
                        <div className="font-bold uppercase text-black">Categorías</div>
                        <ul className="grid grid-cols-2 gap-4 mt-[25px] -mx-[10px]">
                            {
                                NAV_LINKS_1.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className='px-[10px]'
                                    >
                                        <PlainNavLink path={item.link}>
                                            {item.text}
                                        </PlainNavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    {/* LEARN */}
                    <nav className="text-clear">
                        <div className="font-bold uppercase text-black">Saber más</div>
                        <ul className="flex flex-col gap-4 mt-[25px]">
                            {
                                NAV_LINKS_2.map((item, idx) => (
                                    <li key={idx}>
                                        <PlainNavLink path={item.link}>
                                            {item.text}
                                        </PlainNavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    {/* PAYMENT */}
                    <div className="hidden sm:block">
                        <img
                            src={mercadopago} alt="Mercado Pago logo."
                            className="w-[10rem] aspect-[255/237] select-none brightness-0"
                        />
                    </div>
                </div>
                <div className="flex justify-between w-full text-black text-sm">
                    <p>
                        Desarrollado por <PlainNavLink
                            path="/developers"
                            styles={{ 'font-weight': 'bold' }}
                        >Dium</PlainNavLink>
                    </p>
                    <p className="text-center">©Copyright 2023. idePinturerías. Todos los derechos reservados. <br /> RP5, Esquina La Isla Anisacate, Córdoba, Argentina.</p>
                    <p>
                        Diseñado por <PlainNavLink
                            styles={{ 'font-weight': 'bold' }}
                        >Sebastian M.</PlainNavLink>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

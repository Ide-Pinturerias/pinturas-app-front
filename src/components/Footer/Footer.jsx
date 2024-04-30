import React from 'react';
import { Facebook, Instagram, Linkedin } from '@svg';
import ide from '@images/logo/ide.png';
import { PlainNavLink, PlainExternalLink } from '@components/Controls/Links';

const Footer = () => {
  const SOCIAL_MEDIA = [
    { icon: Facebook, link: 'https://www.facebook.com/ide.pintureria/' },
    { icon: Instagram, link: 'https://www.instagram.com/ide.pintureria.ok/' },
    { icon: Linkedin, link: 'https://www.linkedin.com/ide.pintureria/' }
  ];

  return (
    <footer className="flex items-center justify-center w-full bg-primaryClear">
      <div className="flex flex-col justify-between items-center gap-[50px] m-sides max-w-maxSc w-maxIn mt-[50px] mb-[25px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
          <div className="flex flex-col items-start text-clear">
            {/* LOGO */}
            <PlainNavLink path="/">
              <img
                src={ide}
                alt="IdePinturerias logo."
                className="w-[10rem] aspect-[500/293] cursor-pointer brightness-0 select-none"
              />
            </PlainNavLink>
            {/* SOCIAL MEDIA */}
            <div className="w-full mt-[30px] hidden md:block">
              <div className="font-bold uppercase text-black">Redes sociales</div>
              <ul className="flex justify-start gap-4 w-full mt-[10px]">
                {SOCIAL_MEDIA.map((item, idx) => (
                  <li key={idx}>
                    <PlainExternalLink path={item.link} icon>
                      <item.icon />
                    </PlainExternalLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* CONTACT */}
            <div className="w-full mt-[30px]">
              <div className="font-bold uppercase text-black">Soporte</div>
              <ul className="mt-[10px]">
                <li><PlainExternalLink path='tel:+543513061350'>+54 351 306 1350</PlainExternalLink></li>
                <li><PlainExternalLink path='mailto:idepintureria@gmail.com'>idepintureria@gmail.com</PlainExternalLink></li>
              </ul>
              <p className="text-black text-sm mt-4">RP5, Esquina La Isla - Anisacate, Córdoba, ARG.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full text-black text-sm">
          <div className="flex items-center">
            <p>
              Desarrollado por <PlainNavLink
                path="/developers"
                styles={{ 'fontWeight': 'bold' }}
              >Dium</PlainNavLink>
            </p>
            <p className="ml-4">
              Diseñado por <PlainNavLink
                styles={{ 'fontWeight': 'bold' }}
              >Sebastian M.</PlainNavLink>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import ContactForm from '../../components/ContactForm/ContactForm'
import { Facebook, Instagram, Linkedin, Twitter } from '../../components/SVG'

import Banner5 from '@img/pet.png'
import Local from '@img/location.png'
import Map from '@img/map.png'
import Paws from '@img/paws.png'
import { Phone, Email } from '@mui/icons-material'

const SOCIAL_MEDIA = [
  { icon: Facebook, link: 'https://www.facebook.com/ide.pintureria/', rotate: '-rotate-3' },
  { icon: Instagram, link: 'https://www.instagram.com/ide.pintureria.ok/', rotate: 'rotate-5' },
  { icon: Linkedin, link: 'https://www.linkedin.com/ide.pintureria/', rotate: '-rotate-2' },
  { icon: Twitter, link: 'https://twitter.com/ide.pintureria/', rotate: 'rotate-2' }
]

const Contact = () => {
  return (
        <main className="relative flex flex-col items-center p-whiteSpaceTop w-full before:content-[''] before:absolute before:-z-50 before:top-0 before:left-0 before:h-[100vh] before:min-w-full before:bg-turquoise">
            <section className="flex justify-center mb-[8rem] text-white w-full">
                <div className="max-w-[1920px] w-full px-[3.5%]">
                    <h2 className="relative mt-[5rem] w-fit text-[clamp(.75vw,calc(7vw+.5rem),6rem)] font-bold before:content-none before:absolute before:-z-10 before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[125%] before:w-full before:bg-warmWhite before:rounded-[2rem]">Nuestra tienda</h2>
                    <p className="mb-[5rem] text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                        En nuestra tienda encontraras todos los productos que necesitas.
                    </p>
                    <div className="w-full flex justify-center items-center">
                        <img src={Local} alt="Local" className="w-full rounded-[2rem]" />
                    </div>
                </div>
            </section>

            <section className="relative flex justify-center w-full before:content-[''] before:absolute before:-z-50 before:bottom-0 before:left-0 before:h-[25%] before:w-full before:bg-orange">
                <div className="px-[3.5%] box-border w-full max-w-[1920px]">
                    <div className="flex mb-[8rem]">
                        <img
                            src={Paws} alt="huellas"
                            className="w-1/2 h-auto"
                        />
                        <div className="flex flex-col justify-between">
                            <h3 className="text-[clamp(.75vw,calc(3vw+.5rem),4rem)] uppercase font-bold">Amigables con tu pequeño compañero</h3>
                            <p className="text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">Nos enorgullece ser un lugar amigable para todos. Invitamos a explorar nuestras instalaciones con sus queridos compañeros peludos. Explora nuestra amplia selección de pinturas y suministros con la comodidad de saber que tus amigos peludos son bienvenidos.</p>
                        </div>
                    </div>
                    <img
                        src={Banner5} alt="somos pet friendly banner"
                        className="w-full rounded-[2rem]"
                    />
                </div>
            </section>

            <section className="flex justify-center py-[8rem] w-full bg-orange text-white ">
                <div className="px-[3.5%] max-w-[1920px] w-full">
                    <h3 className="text-[clamp(.75vw,calc(4vw+.5rem),4rem)] uppercase mb-12"><strong>Encuéntranos</strong></h3>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex flex-col gap-8">
                            <div>
                                <h4 className="text-[clamp(.6vw,calc(2vw+.5rem),2.8rem)] uppercase font-bold">Direcciones:</h4>
                                <div className="w-1/2 h-full text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                                    RP5 - Esquina La Isla

                                    Anisacate - Córdoba
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[clamp(.6vw,calc(2vw+.5rem),2.8rem)] uppercase font-bold">Horarios</h4>
                                <div className="text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                                    <div>
                                        L-S: 8:00 a.m. - 4:00 p.m.
                                    </div>
                                    <div>
                                        D: 9:00 a.m. - 1:00 p.m.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://www.google.com/maps/place/Pintureria+Fadepa/@-31.727083,-64.407546,14z/data=!4m6!3m5!1s0x942d54233a91322b:0x171ba1f406068069!8m2!3d-31.7294921!4d-64.4100351!16s%2Fg%2F11h75pz_n7?hl=es-419&entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-initial w-full lg:w-[60%]"
                        >
                            <img src={Map} alt="Mapa" className="rounded-[2rem]" />
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-row-reverse items-center px-[3.5%] max-w-[1920px] h-screen">
                    <div className="w-1/2">
                        <h2 className="text-[clamp(.75vw,calc(7vw+.5rem),6rem)]"><strong>Contáctanos</strong></h2>
                        <p className="text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">¡Nos encanta recibir tus mensajes! Envíanos tus consultas, sugerencias y más. Estamos aquí para escucharte y mejorar tu experiencia.</p>
                    </div>
                    <div className="mx-10 mb-5 mt-8 ">
                        <div className="flex flex-wrap items-start justify-center lg:items-stretch">
                            <div className="flex-initial lg:w-1/2 mb-6 md:mb-0 lg:-ml-12 max-w-200">
                                {/* <ContactForm /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[8rem] bg-orange">
                <div className="flex flex-col items-center max-w-[1920px] text-white">
                    <h3 className="mb-16 text-[clamp(.75vw,calc(4vw+.5rem),4rem)] uppercase font-bold">Atención al cliente</h3>
                    <div className="p-8 mx-[20%] mb-16 rounded-[2rem] bg-warmWhite">
                        <p className="text-center text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)] text-black">
                            <strong className="block">Tú eres el centro.</strong>
                            Nuestro equipo de atención al cliente está aquí para responder a tus preguntas, proporcionar asesoramiento experto y garantizar tu completa satisfacción. Ya sea que necesites ayuda para elegir el color perfecto o tengas consultas sobre nuestros productos, estamos comprometidos a hacer de tu experiencia de compra algo extraordinario.
                        </p>
                    </div>
                    <div className="flex justify-between w-1/2">
                        <div className="flex flex-col items-center">
                            <div className="relative mb-8 before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[150%] before:h-[150%] before:bg-warmWhite before:rounded-full">
                                <Phone style={{ width: '70px', height: 'auto', fill: '#000', position: 'relative' }} />
                            </div>
                            <p className="mb-2 text-[clamp(.6vw,calc(2vw+.5rem),2.8rem)] uppercase font-bold">
                                Teléfono
                            </p>
                            <p className="mb-2 text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)] dark:text-black-200">
                                +54 351 306 1350
                            </p>

                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative mb-8 before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[150%] before:h-[150%] before:bg-warmWhite before:rounded-full">
                                <Email style={{ width: '70px', height: 'auto', fill: '#000', position: 'relative' }} />
                            </div>
                            <p className="mb-2 text-[clamp(.6vw,calc(2vw+.5rem),2.8rem)] uppercase font-bold">
                                Correo
                            </p>
                            <p className="mb-2 text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)] dark:text-black-200">
                                idepintureria@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[8rem]">
                <div className="px-[3.5%] max-w-[1920px]">
                    <h3 className="mb-16 text-[clamp(.75vw,calc(4vw+.5rem),4rem)] uppercase"><strong>Nuestras redes oficiales</strong></h3>
                    <div>
                        <ul className="flex justify-between">
                            {
                                SOCIAL_MEDIA.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={`grid items-center ${item.rotate} w-[20%] h-auto p-[5.5%] aspect-square rounded-[2rem] bg-warmWhite fill-black shadow-md`}
                                    >
                                        <a
                                            href={item.link}
                                            className=" mx-2 flex items-center justify-center fill-black rounded-md cursor-pointer"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <item.icon/>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </main>
  )
}

export default Contact

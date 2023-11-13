import Banner5 from '@img/pet.png';
import Local from '@img/location.png';
import Map from '@img/map.png';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Phone, Email } from '@mui/icons-material';


const Contact = () => {
    return (
        <main className="relative p-whiteSpaceTop w-full before:content-[''] before:absolute before:-z-50 before:top-0 before:left-0 before:h-[80vh] before:min-w-full before:bg-turquoise">
            <section className="text-black">
                <div className="max-w-[1920px] px-[3.5%]">
                    <h2 className="relative my-[5rem] px-[2%] w-fit text-[clamp(.75vw,calc(7vw+.5rem),6rem)] font-bold before:content-[''] before:absolute before:-z-10 before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[125%] before:w-full before:bg-warmWhite before:rounded-[2rem]">Nuestra tienda</h2>
                    <p className="">
                        En nuestra tienda encontraras todos los productos que necesitas.
                    </p>
                    <div className="w-full flex justify-center items-center">
                        <img src={Local} alt="Local" className="w-full rounded-[2rem]" />
                    </div>
                </div>

            </section>

            <section>
                <div className="max-w-[1920px]">
                    <h3 className="px-[3.5%] text-[clamp(.75vw,calc(1.75vw+.5rem),4rem)] uppercase">Somos pet friendly!</h3>
                    <div className="w-full flex justify-center items-center">
                        <img src={Banner5} alt="Banner5" className="w-[93%] rounded-[2rem]" />
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[1920px]">
                    <h3 className="px-[3.5%] text-[clamp(.75vw,calc(1.75vw+.5rem),4rem)] uppercase">Visítanos</h3>
                    <div className="w-full flex justify-between items-center p-[3.5%]">
                        <div className="w-1/2 h-full bg-warmWhite">
                            RP5 - Esquina La Isla

                            Anisacate - Córdoba
                        </div>
                        <a
                            href="https://www.google.com/maps/place/Pintureria+Fadepa/@-31.727083,-64.407546,14z/data=!4m6!3m5!1s0x942d54233a91322b:0x171ba1f406068069!8m2!3d-31.7294921!4d-64.4100351!16s%2Fg%2F11h75pz_n7?hl=es-419&entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-initial w-full lg:w-1/2"
                        >
                            <img src={Map} alt="Mapa" className="rounded-[2rem]" />
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[1920px]">
                    <h2 className="px-[3.5%] text-[clamp(.75vw,calc(1.75vw+.5rem),4rem)] uppercase">Hablemos</h2>
                    <div className="mx-10 mb-5 mt-8 ">
                        <div className="flex flex-wrap items-start justify-center lg:items-stretch">
                            <div className="flex-initial lg:w-1/2 mb-6 md:mb-0 lg:-ml-12 max-w-200">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[1920px]">
                    <h3 className="px-[3.5%] text-[clamp(.75vw,calc(1.75vw+.5rem),4rem)] uppercase">Necesitas ayuda?</h3>
                    <div className="flex px-[3.5%]">
                        <div className="flex flex-col items-center">
                            <Phone />
                            <p className="mb-2 text-4xl font-bold">
                                Teléfono:
                            </p>
                            <p className="mb-2 text-neutral-500 dark:text-black-200">
                                +54 351 306 1350
                            </p>

                        </div>
                        <div className="flex flex-col items-center">
                            <Email />
                            <p className="mb-2 text-4xl font-bold">
                                Correo:
                            </p>
                            <p className="mb-2 text-neutral-500 dark:text-black-200">
                                idepintureria@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[1920px]">
                    <h3 className="px-[3.5%] text-[clamp(.75vw,calc(1.75vw+.5rem),4rem)] uppercase">Nuestras redes</h3>
                    <div>

                    </div>
                </div>
            </section>
        </main>
    );
};


export default Contact;
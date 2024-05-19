import ContactForm from "../../components/ContactForm/ContactForm";
import Banner5 from "@img/webp/pet.webp";
import Local from "@img/webp/location.webp";
import Paws from "@img/webp/paws.webp";

const Contact = () => {
  return (
    <main className="relative z-10 flex flex-col items-center p-whiteSpaceTop w-full before:content-[''] before:absolute before:-z-50 before:top-0 before:left-0 before:h-[100vh] before:min-w-full bg-gradient-to-r from-fadepa to-accentClear">
      <section className="flex justify-center mb-16 text-white w-full">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <img src={Local} alt="Local" className="shadow-lg w-full rounded-2xl" />
        </div>
      </section>

      <section className="flex justify-center py-16 w-full text-white">
        <div className="px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
            <img
              src={Paws}
              alt="huellas"
              className="w-full lg:w-1/2 h-auto mb-6 lg:mb-0"
            />
            <div>
              <h3 className="text-lg lg:text-3xl xl:text-4xl uppercase font-bold">
                Amigables con tu pequeño compañero
              </h3>
              <p className="text-sm lg:text-lg xl:text-xl">
                Nos enorgullece ser un lugar amigable para todos. Invitamos a
                explorar nuestras instalaciones con sus queridos compañeros
                peludos.
              </p>
            </div>
          </div>
          <img
            src={Banner5}
            alt="somos pet friendly banner"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="flex justify-center py-16 w-full text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <h3 className="text-lg lg:text-3xl xl:text-4xl uppercase mb-12">
            <strong>Te esperamos</strong>
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="flex flex-col gap-8 mb-6 lg:mb-0">
              <div>
                <h4 className="text-md lg:text-2xl xl:text-2.8xl uppercase font-bold">
                  Dirección:
                </h4>
                <p className="text-sm lg:text-lg xl:text-xl mx-2">
                  RP5 - Esquina La Isla, Anisacate - Córdoba
                </p>
              </div>
              <div>
                <h4 className="text-md lg:text-2xl xl:text-2.8xl uppercase font-bold">
                  Horarios
                </h4>
                <span>Lunes a viernes</span>
                <p className="text-sm lg:text-lg xl:text-xl">
                  9:00 a.m. - 1:00 p.m.
                </p>
                <p className="text-sm lg:text-lg xl:text-xl">
                  3:00 p.m. - 6:30 p.m.
                </p>
                <span>Sabados</span>
                <p className="text-sm lg:text-lg xl:text-xl">
                  9:00 a.m. - 1:00 p.m.
                </p>
              </div>
            </div>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13573.988253225049!2d-64.4100103!3d-31.7296308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d54233a91322b%3A0x171ba1f406068069!2sPintureria%20Fadepa!5e0!3m2!1ses-419!2sar!4v1714579291527!5m2!1ses-419!2sar"
            className="w-full rounded-2xl h-96 shadow-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl w-full text-white">
        <div className="w-full lg:flex lg:justify-between lg:items-center">
          <div className="mb-8 lg:mb-0 lg:w-1/2 lg:pr-8">
            <h2 className="text-2xl lg:text-6xl my-2">
              <strong className="font-heading">Contáctanos</strong>
            </h2>
            <p className="text-sm lg:text-lg xl:text-xl">
              ¡Nos encanta recibir tus mensajes! Envíanos tus consultas,
              sugerencias y más.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

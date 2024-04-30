import ContactForm from '../../components/ContactForm/ContactForm'
import Banner5 from '@img/pet.png'
import Local from '@img/location.png'
import Map from '@img/map.png'
import Paws from '@img/paws.png'

const Contact = () => {
  return (
    <main className="relative z-10 flex flex-col items-center p-whiteSpaceTop w-full before:content-[''] before:absolute before:-z-50 before:top-0 before:left-0 before:h-[100vh] before:min-w-full before:bg-accentClear">
      <section className="flex justify-center mb-16 text-white w-full">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <img src={Local} alt="Local" className="w-full rounded-2xl" />
        </div>
      </section>

      <section className="relative flex justify-center w-full before:content-[''] before:absolute before:-z-50 before:bottom-0 before:left-0 before:h-[25%] before:w-full before:bg-primaryClear">
        <div className="px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
            <img src={Paws} alt="huellas" className="w-full lg:w-1/2 h-auto mb-6 lg:mb-0"/>
            <div>
              <h3 className="text-lg lg:text-3xl xl:text-4xl uppercase font-bold">Amigables con tu pequeño compañero</h3>
              <p className="text-sm lg:text-lg xl:text-xl">Nos enorgullece ser un lugar amigable para todos. Invitamos a explorar nuestras instalaciones con sus queridos compañeros peludos.</p>
            </div>
          </div>
          <img src={Banner5} alt="somos pet friendly banner" className="w-full rounded-2xl"/>
        </div>
      </section>

      <section className="flex justify-center py-16 w-full bg-primaryClear text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <h3 className="text-lg lg:text-3xl xl:text-4xl uppercase mb-12"><strong>Encuéntranos</strong></h3>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="flex flex-col gap-8 mb-6 lg:mb-0">
              <div>
                <h4 className="text-md lg:text-2xl xl:text-2.8xl uppercase font-bold">Direcciones:</h4>
                <p className="text-sm lg:text-lg xl:text-xl">RP5 - Esquina La Isla, Anisacate - Córdoba</p>
              </div>
              <div>
                <h4 className="text-md lg:text-2xl xl:text-2.8xl uppercase font-bold">Horarios</h4>
                <p className="text-sm lg:text-lg xl:text-xl">L-S: 8:00 a.m. - 4:00 p.m., D: 9:00 a.m. - 1:00 p.m.</p>
              </div>
            </div>
            <img src={Map} alt="Mapa" className="rounded-2xl max-w-full lg:w-1/2" />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
  <div className="w-full lg:flex lg:justify-between lg:items-center">
    <div className="mb-8 lg:mb-0 lg:w-1/2 lg:pr-8">
      <h2 className="text-2xl lg:text-6xl my-2">
        <strong className="font-heading">Contáctanos</strong>
      </h2>
      <p className="text-sm lg:text-lg xl:text-xl">
        ¡Nos encanta recibir tus mensajes! Envíanos tus consultas, sugerencias y más.
      </p>
    </div>
    <div className="w-full lg:w-1/2">
      <ContactForm />
    </div>
  </div>
</section>
    </main>
  )
}

export default Contact

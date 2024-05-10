import imgAbout2 from '@img/webp/about2.webp'
import imgAbout from '@img/webp/about.webp'
import React from 'react'
import { LightBulb, Rocket } from '@svg'

const About = () => {
  // Textos predefinidos
  const PARRAGRAPH_1 = 'Nuestra historia comenzó como un emprendimiento familiar, impulsado por la visión y pasión de Rodolfo Miguel Guercio. Inicialmente ubicada en la pintoresca localidad de Alta Gracia – Córdoba, pronto nos dimos cuenta de la creciente demanda de pinturas de alta calidad para obras industriales y proyectos particulares en la próspera Villa Anisacate.'
  const PARRAGRAPH_2 = 'Con astucia y determinación, nos trasladamos estratégicamente a Villa Anisacate, donde encontramos nuestro hogar en una localidad en pleno desarrollo y expansión. Desde entonces, hemos trabajado incansablemente para consolidarnos como líderes en la industria, ofreciendo una amplia gama de pinturas FADEPA, accesorios para pintores y herramientas de ferretería de las principales marcas.'
  const PARRAGRAPH_3 = 'En IDE Pinturerías, creemos en la excelencia y el servicio personalizado. Nuestro equipo dedicado está aquí para asesorarte en cada paso de tu proyecto, desde grandes obras hasta pequeños proyectos de decoración. Nuestra pasión por la calidad y la satisfacción del cliente nos impulsa a superar las expectativas y a ser tu socio confiable en todas tus necesidades relacionadas con pinturas y ferretería.'

  return (
    <main className="flex flex-col items-center mt-20 px-4 md:px-6 lg:px-8">
      <img src={imgAbout} alt="Descripción de la imagen" className="max-w-full h-auto" />

      <div className="flex flex-col items-center my-5 text-center max-w-4xl mx-auto">
        <h1 className="text-xl lg:text-2xl font-bold mb-2">¡Bienvenidos a ide Pinturerias!</h1>
        <p className="text-base mb-2">
          {PARRAGRAPH_1}
        </p>
        <p className="mb-2">
          {PARRAGRAPH_2}
        </p>
        <p className="mb-2">
          {PARRAGRAPH_3}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  gap-10 max-w-4xl mx-auto my-4">
        <div className="flex flex-col items-center text-center">
          <Rocket size={'6rem'} />
          <p className="text-lg font-bold mt-2">Misión</p>
          <p className="text-sm max-w-xs mb-2">
            Ser el líder indiscutible en el rubro de pinturas y ferretería en Villa Anisacate y alrededores, brindando productos y servicios excepcionales para satisfacer las necesidades de nuestros clientes.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <LightBulb size={'6rem'} />
          <p className="text-lg font-bold mt-2">Visión</p>
          <p className="text-sm max-w-xs mb-2">
            Convertirnos en la primera opción para proyectos de construcción, decoración y mantenimiento en nuestra comunidad, destacados por nuestra excelencia en productos y atención personalizada.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-7 w-full max-w-4xl mx-auto mb-11 p-5 rounded shadow-sm">
        <img src={imgAbout2} alt="img2" className="h-32 w-32 rounded-full" />
        <div className="flex-1">
          <p className="text-blue-600 font-bold">Cómo trabajamos en ide Pinturerías</p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Unión:</strong> Fomentamos un ambiente de trabajo basado en el respeto y apoyo mutuo, creando una familia empresarial que se preocupa por el bienestar de cada miembro.
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Compromiso:</strong> Nos comprometemos a brindar un servicio excepcional y a cumplir con las expectativas de nuestros clientes, buscando siempre superar sus necesidades y deseos.
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Superación:</strong> Buscamos el crecimiento constante y la mejora continua en todo lo que hacemos, tanto a nivel individual como colectivo, para alcanzar el máximo potencial.
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Desarrollo personal:</strong> Valoramos y promovemos el desarrollo profesional y personal de nuestro equipo, brindándoles oportunidades de crecimiento y capacitación para alcanzar sus metas y sueño.
          </p>
        </div>
      </div>
    </main>
  )
}

export default About

import React from 'react'
import image1 from '@images/store/store1.webp'
import { ButtonLink } from '@components/Controls/Links'

const AboutCard = () => {
    return (
        <section className="flex items-center justify-center w-full mt-[50px] bg-bg">
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-[25px] md:gap-[50px] m-sides max-w-maxSc w-maxIn'>
                <img
                    src={image1}
                    alt="Vista exterior de la tienda idePinturerias mostrando productos de pintura y herramientas."
                    className='self-center items-center object-cover aspect-[4/3] w-full max-h-[400px] lg:w-[calc((100%-50px)/2)] rounded-lg'
                />
                <div className="flex flex-col items-start lg:items-center w-full lg:w-[calc((100%-50px)/2)] mt-3">
                    <h2 className="self-start text-clear text-4xl text-start font-primary font-bold">
                        Conózcanos
                    </h2>
                    <p className="mb-3 md:mb-6 text-clear text-md text-start">
                        Dedicados y comprometidos al 100% con pasión por la calidad, en idePinturerias priorizamos la excelencia y servicio personalizado. Nos esforzamos por superar tus expectativas al ofrecerte un servicio excepcional en pinturas y ferretería. Queremos ser tu socio confiable mientras nuestro equipo te brinda asesoramiento en cada proyecto, ya sea grande o pequeño.
                    </p>
                    <ButtonLink path='/about'>
                        Nuestra historia
                    </ButtonLink>
                </div>
            </div>
        </section>
    )
}

export default AboutCard

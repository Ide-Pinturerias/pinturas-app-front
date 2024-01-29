import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../../assets/images/store/store1.webp"

const AboutCard = () => {

    const buttonMain = `transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-primaryDull active:scale-[.97]`

    return (
        <section className="flex items-center justify-center w-full mt-[50px] bg-bg">
            <div className='flex justify-center items-center gap-[50px] m-sides max-w-maxSc w-maxIn'>
                <img
                    src={image1} 
                    alt="Vista exterior de la tienda idePinturerias mostrando productos de pintura y herramientas."
                    className='self-center items-center object-cover aspect-[4/3] w-[calc((100%-50px)/2)] rounded-3xl'
                />
                <div className="flex flex-col justify-center w-[calc((100%-50px)/2)] mt-3">
                    <h2 className="text-clear text-[clamp(1rem,calc(0.75rem+5vw),4rem)] text-start font-heading font-bold">
                        Conózcanos
                    </h2>
                    <p className="text-clear text-md mb-3 md:mb-11 text-start">
                        Dedicados y comprometidos al 100% con pasión por la calidad, en idePinturerias priorizamos la excelencia y servicio personalizado. Nos esforzamos por superar tus expectativas al ofrecerte un servicio excepcional en pinturas y ferretería. Queremos ser tu socio confiable mientras nuestro equipo te brinda asesoramiento en cada proyecto, ya sea grande o pequeño.
                    </p>
                    <Link
                        to='/about'
                        className={`self-center w-fit p-4 box-border bg-transparent border border-primaryClear rounded-3xl text-sm font-bold text-primaryClear ${buttonMain}`}
                    >
                        Nuestra historia
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AboutCard

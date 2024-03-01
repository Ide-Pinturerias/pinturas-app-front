import React from 'react'
import { Link } from 'react-router-dom'
import banner4 from '../../assets/images/banners/banner4.webp'

const BannerCarousel = () => {
  const afterPseudo = `
        after:content-[""] after:absolute after:opacity-0 after:-inset-2
        after:rounded-3xl after:shadow-main after:bg-bgFocus
        after:border after:border-hightlight
        after:transition-focus after:ease-linear after:duration-100

        hover:after:opacity-100
        focus:after:opacity-100

        focus:after:outline focus:after:outline-focus focus:after:outline-offset-focus
        focus:after:bg-duller focus:after:border-clear focus:after:shadow-main
        after:mix-blend-multiply

        after:pointer-events-none
    `

  return (
        <section className='flex items-center justify-center w-full my-[50px] bg-bg'>
            <div className="m-sides max-w-maxSc w-maxIn">
                <Link
                    to="/blog"
                    className={`relative rounded-3xl ${afterPseudo}`}
                >
                    <img
                        src={banner4}
                        alt="¡Descubre un mundo de colores en nuestro blog de pinturas!"
                        className="overflow-hidden object-cover w-full h-auto aspect-[16/5] rounded-3xl"
                    />
                </Link>
            </div>
        </section>
  )
}

export default BannerCarousel

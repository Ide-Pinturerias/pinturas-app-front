import React from 'react'
import { Link } from 'react-router-dom'
import banner4 from '@images/banners/banner4.webp'
import { afterPseudo } from '../../styles.js'

const BannerCarousel = () => {
  return (
        <section className='flex items-center justify-center w-full my-[50px] bg-bg'>
            <div className="m-sides max-w-maxSc w-maxIn">
                <Link
                    to="/blog"
                    className={`relative rounded-lg ${afterPseudo}`}
                >
                    <img
                        src={banner4}
                        alt="¡Descubre un mundo de colores en nuestro blog de pinturas!"
                        className="overflow-hidden object-cover w-full h-auto aspect-[16/5] rounded-lg"
                    />
                </Link>
            </div>
        </section>
  )
}

export default BannerCarousel

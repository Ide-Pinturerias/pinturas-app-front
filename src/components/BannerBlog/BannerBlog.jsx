import React from 'react'
import { Link } from 'react-router-dom'
import banner4 from '@img/banner4.png'

const BannerCarousel = () => {
    return (
        <section className='flex items-center justify-center w-full my-[50px] bg-bg'>
            <div className="m-sides max-w-maxSc w-maxIn">
                <Link to="/blog">
                    <img
                        // src={banner4}
                        alt="¡Descubre un mundo de colores en nuestro blog de pinturas!"
                        className="object-cover w-full h-auto rounded-xl cursor-pointer"
                    />
                </Link>
            </div>
        </section>
    )
}

export default BannerCarousel

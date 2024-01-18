import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner1 from "../../assets/images/banners/banner1.webp"
import banner2 from "../../assets/images/banners/banner2.webp"
import banner3 from "../../assets/images/banners/banner3.webp"

const BannerCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    {
      src: banner1,
      link: '/products'
    },
    {
      src: banner2,
      link: '/products'
    },
    {
      src: banner3,
      link: '/products'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    )
  }

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  return (
    <section className="flex justify-center items-center w-full">
          <div className="overflow-hidden relative flex justify-center items-center m-sides aspect-[16/5] max-w-max rounded-[2rem]">
        {
          images.map((image, index) => (
            <Link
              key={index}
              to={image.link}
              className={`top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${index === currentImage ? 'relative opacity-100' : 'absolute opacity-0'}`}
            >
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-full h-auto select-none"
              />
            </Link>
          ))
        }
        <div className="absolute left-8">
          <button
            className="w-8 h-8 p-1 bg-gray-800 bg-opacity-20 text-white rounded-full focus:outline-none"
            onClick={goToPrevImage}
          >
            &lt;
          </button>
        </div>
        <div className="absolute right-8">
          <button
            className="w-8 h-8 p-1 bg-gray-800 bg-opacity-20 text-white rounded-full focus:outline-none"
            onClick={goToNextImage}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}

export default BannerCarousel

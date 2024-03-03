import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner1 from '@images/banners/banner1.webp'
import banner2 from '@images/banners/banner2.webp'
import banner3 from '@images/banners/banner3.webp'
import { ChevronRightRounded, ChevronLeftRounded } from '@mui/icons-material'
import { Button } from '@components/Controls/Buttons'

const BannerCarousel = () => {
  // LOCA STATES:
  const [currentImage, setCurrentImage] = useState(0)

  // CONST:
  const images = [{
    src: banner1,
    alt: 'Juntos por un mundo mejor. Por cada balde de 20L lleno de tapitas, FADEPA te da 4 litros de pintura.'
  }, {
    src: banner2,
    alt: '¡Ponle color a los Black Days! 15% OFF *En referencias seleccionadas.'
  }, {
    src: banner3,
    alt: 'Dale color a tu vida. idePinturerías.'
  }]

  // FUNCTIONS:
  const goToPrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
  }

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  // LIFE CYCLES:
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // COMPONENTS:
  return (
        <section className="flex justify-center items-center w-full">
            <div className="overflow-hidden relative flex justify-center items-center m-sides aspect-[16/5] max-w-maxSc w-maxIn rounded-[2rem]">
                {
                    images.map((img, index) => (
                        <Link
                            key={index}
                            to='/products'
                            className={`top-0 left-0 absolute size-full transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : '-z-10 pointer-events-none opacity-20'}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto object-cover select-none m-auto"
                            />
                        </Link>
                    ))
                }
                <div className="absolute top-1/2 -translate-y-1/2 left-[3%]">
                  <Button variant="secondary" onClick={goToPrevImage} className="grid place-items-center size-[45px] p-0 active:scale-90">
                      <ChevronLeftRounded style={{ width: '70%', height: '70%' }} />
                  </Button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-[3%]">
                  <Button variant="secondary" onClick={goToNextImage} className="grid place-items-center size-[45px] p-0 active:scale-90">
                      <ChevronRightRounded style={{ width: '70%', height: '70%' }} />
                  </Button>
                </div>
            </div>
        </section>
  )
}

export default BannerCarousel

import React from 'react'
import img404 from '@img/404.png'
import { ButtonLink } from '@components/Controls/Links'

const NotFound = () => {
  return (
    <div className="flex flex-col mt-5 items-center justify-center min-h-screen">
      <h2 className="text-secondary text-lg mb-8">
        La página que estás buscando no parece existir.
      </h2>
      <img src={img404} alt="404" className="w-90" />
      <ButtonLink to="/">
        Volver a inicio
      </ButtonLink>
    </div>
  )
}

export default NotFound

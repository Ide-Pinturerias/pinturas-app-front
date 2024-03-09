import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteCard from '../FavoriteCard/FavoriteCard'

const Favorities = () => {
  const favorites = useSelector((state) => state.allFavorites)

  return (
    <div className="container mx-auto px-4 mt-16">
      <div className="content flex-1 min-h-[500px] overflow-y-auto p-4 rounded bg-tertiary grid grid-cols-2">

        {
          favorites.length > 0
            ? (
                favorites.map((favorite) => (
                <div key={favorite.idProduct}>
                  <FavoriteCard
                    id={favorite.idProduct}
                    image={favorite.image}
                    name={favorite.name}
                    stock={favorite.stock}
                    active={favorite.active}
                    price={favorite.price}
                  />
                </div>
                ))
              )
            : (
              <p className="flex items-center space-x-3 text-gray-500 p-2 ">
                No tienes favoritos
              </p>
              )}
      </div>
      <div className="flex justify-between m-10">
        <Link to="/products">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Ir a buscar Productos
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Favorities

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteCard from '../FavoriteCard/FavoriteCard'

const Favorities = () => {
  const favorites = useSelector((state) => state.allFavorites)

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="content flex-1 min-h-[500px] overflow-y-auto p-4 rounded bg-tertiary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <FavoriteCard
              key={favorite.idProduct}
              id={favorite.idProduct}
              image={favorite.image}
              name={favorite.name}
              stock={favorite.stock}
              active={favorite.active}
              price={favorite.price}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No tienes favoritos
          </p>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/products">
          <button
            type="submit"
            className="bg-fadepa hover:bg-primaryClear text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Ir a buscar Productos
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Favorities

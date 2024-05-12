import { useDispatch, useSelector } from 'react-redux'
import { deleteFavorites } from '@redux/actions/Favorites/deleteFavorite'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const FavoriteCard = ({ id, image, name, stock, active, price }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const idUser = user.id
  const idProduct = id

  const deleteProductCart = () => {
    deleteFavorites(idUser, idProduct)(dispatch)
      .then((response) => {
        if (response) {
          Swal.fire({
            icon: 'success',
            text: 'Favorito eliminado'
          })
        }
      })
      .catch((error) => console.log('error', error))
  }

  return (
    <Link to={`/products/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative">
          <img
            src={image}
            alt={`${name}`}
            className="w-full h-48 object-cover"
          />
          <button
            className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md"
            onClick={() => deleteProductCart()}
          >
            Eliminar
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <div className="mb-2">
            {stock === 1 && (
              <p className="text-red-700 font-semibold">Producto sin stock</p>
            )}
            {active === 'false' && (
              <p className="text-red-700 font-semibold">Producto no disponible</p>
            )}
          </div>
          <p className="text-2xl font-bold text-gray-800">${price}</p>
        </div>
      </div>
    </Link>
  )
}

export default FavoriteCard

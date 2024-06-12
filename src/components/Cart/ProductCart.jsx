import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { Button } from '@components/Controls/Buttons'
import { deleteProductCart } from '@redux/actions/Cart/deleteProductCart'

const ProductCart = ({ id, name, quantity, image, price, stock, subtotal }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const onDeleteProductCart = () => {
    dispatch(deleteProductCart(user, id))
    Swal.fire({
      title: '¡ÉXITO!',
      text: 'Producto eliminado del carrito',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then(() => {
      window.location.reload()
    })
  }

  return (
    <div className="border-t w-full">
      <div className="flex flex-row items-center">
        <div className="flex-shrink-0 w-20 h-20">
          <a href={`/products/${id}`}>
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </a>
        </div>
        <div className="flex-1 min-w-0 px-5 flex flex-col">
          <h1 className="text-base md:text-lg font-semibold truncate">
            <a href={`/products/${id}`}>{name}</a>
          </h1>
          <div className="flex gap-5 mt-2">
            <Button 
              variant="danger"
              onClick={onDeleteProductCart}
              className="text-xs py-1 px-2 whitespace-nowrap"
            >
              Eliminar
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-2">
            <div className="flex flex-col items-center">
              <h1>Precio: ${price}</h1>
              <h1>Cantidad: {quantity}</h1>
              {stock > 0
                ? <h1 className="text-gray-500">{stock} disponibles</h1>
                : <p className="text-red-700 font-semibold">Producto sin stock</p>}
            </div>
            <div className="w-full sm:w-auto sm:ml-4 flex justify-end items-center">
              {stock > 0
                ? <h1 className="text-xl font-bold text-gray-700">$ {subtotal}</h1>
                : <p className="text-red-700 font-semibold">Producto no disponible</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart

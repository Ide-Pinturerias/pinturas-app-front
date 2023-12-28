import { deleteProductCart } from '@redux/actions/Cart/deleteProductCart'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const ProductCart = ({ id, name, quantity, image, price, stock, subtotal }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const onDeleteProductCart = ({ user, id }) => {
    const productsLocal = JSON.parse(window.localStorage.getItem('productsLocal')) || []
    dispatch(deleteProductCart(user, productsLocal, id))
    Swal.fire({
      title: 'EXITO!',
      text: 'Producto eliminado del carrito',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then(() => {
      window.location.reload()
    })
  }

  const productView = (
    <div className=" py-3 my-5 w-full border-t">
        <div className="">
            <div className="flex flex-row">
                <div className="w-fit">
                    <img src={image} alt="" className="w-20" />
                </div>
                <div className="flex px-5 flex-col w-11/12">
                    <h1 className="text-base text-ms font-semibold">{name}</h1>
                    <div className="flex gap-5">
                        <button className="text-indigo-500 font-medium font-sans text-left flex items-center pb-3" onClick={
                            () => onDeleteProductCart({ user, id })
                        }>Eliminar</button>
                    </div>
                    <div className="flex justify-between ">
                        <div className="flex items-center justify-center flex-col">
                                <h1 className="flex justify-center items-center">Precio: ${price}</h1>
                                <h1 className="flex justify-center items-center">Cantidad: {quantity}</h1>
                            {
                                stock > 0
                                  ? <h1 className="text-gray-500"> {stock} disponibles </h1>
                                  : <p className="text-red-700 font-semibold"> Producto sin stock </p>
                            }
                        </div>
                        <div className="w-80 flex justify-end items-center">
                            {stock > 0
                              ? <h1 className="text-xl font-bold text-gray-700">$ {subtotal}</h1>
                              : <p className="text-red-700 font-semibold"> Producto no disponible </p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )

  return (
    <>
      {id && name && quantity && image && price && stock && subtotal
        ? productView
        : null}
    </>
  )
}

export default ProductCart

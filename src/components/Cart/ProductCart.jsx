import { deleteProductCart } from '@redux/actions/Cart/deleteProductCart'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { Button } from '@components/Controls/Buttons'

function ProductCart({ id, name, quantity, image, price, stock, subtotal }) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const onDeleteProductCart = ({ user, id }) => {
        dispatch(deleteProductCart(user, id))
        Swal.fire({
            title: 'EXITO!',
            text: 'Producto eliminado del carrito',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            window.location.reload()
        })
    }

    // const productView = (
    //     <div className="py-3 my-5 w-full border-t">
    //         <div className="flex flex-row">
    //             <div className="w-fit">
    //                 <a href={`/products/${id}`}>
    //                     <img src={image} alt="" className="w-20" />
    //                 </a>
    //             </div>
    //             <div className="flex px-5 flex-col w-11/12">
    //                 <h1 className="text-base text-ms font-semibold">
    //                     <a href={`/products/${id}`}>
    //                         {name}
    //                     </a>
    //                 </h1>
    //                 <div className="flex gap-5">
    //                     <Button
    //                         variant="danger"
    //                         onClick={() => onDeleteProductCart({ user, id })}
    //                     >
    //                         Eliminar
    //                     </Button>
    //                 </div>
    //                 <div className="flex justify-between ">
    //                     <div className="flex items-center justify-center flex-col">
    //                         <h1 className="flex justify-center items-center">Precio: ${price}</h1>
    //                         <h1 className="flex justify-center items-center">Cantidad: {quantity}</h1>
    //                         {
    //                             stock > 0
    //                                 ? <h1 className="text-gray-500"> {stock} disponibles </h1>
    //                                 : <p className="text-red-700 font-semibold"> Producto sin stock </p>
    //                         }
    //                     </div>
    //                     <div className="w-80 flex justify-end items-center">
    //                         {stock > 0
    //                             ? <h1 className="text-xl font-bold text-gray-700">$ {subtotal}</h1>
    //                             : <p className="text-red-700 font-semibold"> Producto no disponible </p>}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <>
            {
                id && name && quantity && image && price && stock >= 0 && subtotal ? (
                    <li className="flex h-[225px] p-[24px]">
                        <div>checkbox</div>
                        <img src={image} className="aspect-square object-cover size-[170px]" />
                        <div className="flex flex-col flex-1">
                            <span>{name}</span>
                            <span>PATENT HERE</span>
                            <div>CATEGORY HERE</div>
                            <div><span>Tamaño del envase: </span>PACKAGE HERE</div>
                            <div><span>Color: </span>COLOR HERE</div>
                        </div>
                        <div className="flex flex-col items-end">
                            <Button variant="tertiary">Seleccionar solo este producto</Button>
                            <strong>$ {subtotal}</strong>
                            <span>$ {price} por cada unidad</span>
                            <div>SELECTOR HERE</div>
                            {
                                stock > 10 ? (
                                    <span>¡Quedan solo 3 unidades! </span>
                                ) : (
                                    stock === 1 ? (
                                        <span>Última unidad</span>
                                    ) : null
                                )
                            }
                            <Button variant="tertiary">Guardar para después</Button>
                            <Button
                                variant="danger"
                                onClick={() => onDeleteProductCart({ user, id })}
                            >
                                Quitar
                            </Button>
                        </div>
                    </li>
                ) : null
            }
        </>
    )
}

export default ProductCart

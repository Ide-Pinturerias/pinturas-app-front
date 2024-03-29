import { deleteProductCart } from '@redux/actions/Cart/deleteProductCart'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { Button } from '@components/Controls/Buttons'
import { formatNumberWithDots } from "@scripts/formatNumberWithDots"
import NumberSelector from '@components/Controls/NumberSelector'

function ProductCart({ id, name, category, brand, size, color, quantity, image, price, stock, subtotal }) {
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
                id && name && category && brand && size && color && quantity && image && price && stock >= 0 && subtotal ? (
                    <li className="flex gap-[16px] min-h-[225px] mb-[24px] p-[24px] text-[16px]">
                        <div className="flex flex-1 gap-[16px]">
                            <input type="checkbox" className="w-[20px]" />
                            <img src={image} className="aspect-square object-cover size-[170px] rounded-[10px]" />
                            <div className="flex flex-col flex-1 gap-[4px]">
                                <span className="uppercase font-bold text-[18px]">{name}</span>
                                <span>{brand}</span>
                                <div className="h-[24px] w-fit px-[8px] bg-black rounded-full uppercase text-bg text-[12px] leading-[24px]">
                                    {category}
                                </div>  
                                <div><span>Presentación: </span>{size}</div>
                                <div><span>Color: </span>{color}</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-[4px]">
                            <Button variant="tertiary">Solo este producto</Button>
                            <strong className="text-[32px]">$ {formatNumberWithDots(subtotal)}</strong>
                            {
                                quantity > 1 ? (
                                    <span><strong>$ {formatNumberWithDots(price)}</strong> por cada unidad</span>
                                ) : null
                            }
                            <NumberSelector limit={stock}/>
                            {
                                stock === 10 ? (
                                    <span>¡Quedan solo <strong>{stock}</strong> unidades! </span>
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

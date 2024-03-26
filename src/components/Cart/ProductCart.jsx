import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductCart } from '@redux/actions/Cart/deleteProductCart'
import { formatNumberWithDots } from "@scripts/formatNumberWithDots"
import Swal from 'sweetalert2'
import ProductQuantitySelector from '@components/Controls/ProductQuantitySelector'
import { Button } from '@components/Controls/Buttons'

function ProductCart({ id, name, category, brand, size, color, quantity, image, price, stock, subtotal }) {

    // CONST:
    const dispatch = useDispatch()

    // GLOBAL STATES:
    const user = useSelector(state => state.user)

    // LOCAL STATES:
    // Cantidad de productos que se llevan:
    const [numberOfItems, setNumberOfItems] = useState(1)
    // Indica si se está actualizando la prop "quantity" del producto (se usa para evitar exceso de peticiones):
    const [isNumberOfItemsUpdating, setIsNumberOfItemsUpdating] = useState(false)

    // FUNCTIONS:
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

    // LIFE CYCLES:
    useEffect(() => {
        try {
            const productsLocal = JSON.parse(localStorage.getItem("productsLocal"))
            if (Array.isArray(productsLocal)) {
                const product = productsLocal.find(obj => obj.id.toString() === id.toString());
                setNumberOfItems(product.quantity);
            }
        } catch (error) {
            setNumberOfItems(1);
        }
    }, [])

    // COMPONENT:
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
                            <ProductQuantitySelector
                                number={numberOfItems}
                                setNumber={setNumberOfItems}
                                limit={stock}
                                isNumberOfItemsUpdating={isNumberOfItemsUpdating}
                                setIsNumberOfItemsUpdating={setIsNumberOfItemsUpdating}
                                idProduct={id}
                                idUser={user.id}
                            />
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

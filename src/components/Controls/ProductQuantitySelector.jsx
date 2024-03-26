
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { updateQuantity } from '@redux/actions/Cart/updateQuantity'
import { Plus, Minus } from "@svg"


export default function ProductQuantitySelector({ number, setNumber, limit, isNumberOfItemsUpdating, setIsNumberOfItemsUpdating, idProduct, idUser }) {

    // CONSTS:
    const dispatch = useDispatch();

    // FUNCTIONS:
    // Controlar el <input> conectado al estado "number".
    // "number" debe ser un NÚMERO mayor a 0  y menor al stock del producto.
    const handleNumberOfItems = (event) => {
        setTimeout(() => {
            if (!isNumberOfItemsUpdating && limit !== 0) {
                const { value } = event.target
                if (value === '' || (!isNaN(value) && parseInt(value) >= 1 && parseInt(value) <= limit)) {
                    setNumber(Number(value))
                };
            }
        }, 700)
    }

    // Controlar los botones de "+" y "-" relacionados al estado "number".
    // "number" debe ser un NÚMERO mayor a 0  y menor al stock del producto.
    const handleNumberChange = (parameter) => {
        setTimeout(() => {
            if (!isNumberOfItemsUpdating && limit !== 0) {
                if (parameter === 'add' && number < limit) {
                    setNumber((prev) => prev + 1)
                } else if (parameter === 'remove' && number > 1) {
                    setNumber((prev) => prev - 1)
                };
            }
        }, 700)
    }

    // LIFE CYCLES:
    // Fallback para evitar errores cuando el usuario settea "number" del producto.
    useEffect(() => {
        if (number <= 0 || number > limit) {
            setNumber(1)
        } else if (limit === 0) {
            setNumber(0)
        }
    }, [number])

    // Manejar la cantidad de productos ("number", "quantity").
    useEffect(() => {
        (async () => {
            try {
                setIsNumberOfItemsUpdating(true)
                const productToAdd = { id: idProduct, idUser, quantity: number }
                await dispatch(updateQuantity(idUser, number, productToAdd))
                setIsNumberOfItemsUpdating(false)
            } catch (error) {
                setIsNumberOfItemsUpdating(false)
                console.log(`Error trying to dispatch uptateQuantity in Detail component: ${error}`)
            }
        })()
    }, [number, dispatch, idProduct, idUser])

    // COMPONENT:
    return (
        <div className="flex border border-black rounded-[2rem] text-lg h-fit">
            <button
                className="p-3"
                onClick={() => handleNumberChange("remove")}
            >
                <Minus />
            </button>
            <input
                value={number}
                onChange={(e) => handleNumberOfItems(e)}
                type="text"
                inputMode="numeric"
                maxLength={3}
                step={1}
                min={0}
                max={limit}
                className="bg-transparent text-center w-14 p-3"
            />
            <button
                className="p-3"
                onClick={() => handleNumberChange("add")}
            >
                <Plus />
            </button>
        </div>
    )
}
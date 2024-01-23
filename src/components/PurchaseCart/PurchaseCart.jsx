import { useSelector, useDispatch } from 'react-redux'
import { postOrderByCart } from '../../redux/actions/Orders/postOrderByCart'
import { postOrderPayment } from '../../redux/actions/Orders/postOrderPayment'
import Swal from 'sweetalert2'

const PurchaseCart = () => {
  const dispatch = useDispatch()
  const { idCart } = useSelector(state => state.cart)
  const user = useSelector(state => state.user)

  const handlePurchase = async () => {
    try {
      // Si no estoy logueado no puedo comprar
      if (Object.keys(user).length === 0) {
        Swal.fire('Debes iniciar sesión para poder comprar')
        return
      }

      const idOrder = await dispatch(postOrderByCart(idCart))
      const initPoint = await dispatch(postOrderPayment(idOrder))

      window.location.href = initPoint
    } catch (error) {
      console.error('Error al realizar la compra:', error.message)
    }
  }

  return (<>
        <button className="w-[80%] mb-2 p-4 bg-orange rounded-[2rem] text-white text-sm font-bold uppercase"
        onClick={handlePurchase}
        >¡Comprar Carrito!</button>
    </>)
}

export default PurchaseCart

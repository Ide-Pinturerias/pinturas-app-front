import { useSelector, useDispatch } from 'react-redux'
import { postOrderByCart } from '@redux/actions/Orders/postOrderByCart'
import { postOrderPayment } from '@redux/actions/Orders/postOrderPayment'
import Swal from 'sweetalert2'
import { Button } from '@components/Controls/Buttons'

const PurchaseCart = ({ products }) => {
  const dispatch = useDispatch()
  const { idCart } = useSelector(state => state.cart)
  const user = useSelector(state => state.user)

  // controlar si algun producto que se quiera comprar no tiene stock
  const checkStock = () => {
    return products.some(product => product.stock <= 0)
  }
  // funcion para efectuar compra
  const handlePurchase = async () => {
    try {
      // Si no estoy logueado no puedo comprar
      if (Object.keys(user).length === 0) {
        Swal.fire('Debes iniciar sesión para poder comprar')
        return
      }

      const idOrder = await dispatch(postOrderByCart(idCart))
      const initPoint = await dispatch(postOrderPayment(idOrder))

      // Usar navigate() de "react-router".
      window.location.href = initPoint
    } catch (error) {
      Swal.fire('Algo falló al intentar realizar la compra')
      console.error('Error al realizar la compra:', error.message)
    }
  }

  return (
    <Button
      variant="primary"
      className={`w-full ${checkStock() ? "bg-[#CCC]" : ""}`}
      onClick={handlePurchase}
      disabled={checkStock()}
    >
      Continuar compra
    </Button>
  )
}

export default PurchaseCart

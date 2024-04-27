import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '@redux/actions/Cart/clearCart'
import { Button } from '@components/Controls/Buttons'

const ClearCart = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleClearCart = () => {
    dispatch(clearCart(user.id))
      .then(() => {
        window.location.reload()
      })
  }
  return (
    <Button
      variant="danger"
      onClick={handleClearCart}
    >
      Vaciar Carrito
    </Button>
  )
}

export default ClearCart

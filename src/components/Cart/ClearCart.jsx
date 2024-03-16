import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '@redux/actions/Cart/clearCart'
import { Button } from '@components/Controls/Buttons'

const ClearCart = ({ setIsLoading }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleClearCart = () => {
    setIsLoading(true)
    dispatch(clearCart(user.id))
      .then(() => {
        setIsLoading(false)
        window.location.reload()
      })
  }
  return (
    <Button
      variant="danger"
      onClick={handleClearCart}
    >
      Vaciar carro
    </Button>
  )
}

export default ClearCart

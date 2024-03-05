import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../redux/actions/Cart/clearCart'

const ClearCart = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleClearCart = () => {
    dispatch(clearCart(user.id))
      .then(() => {
        window.location.reload()
      })
  }
  return (<>
    <button className="p-4 bg-primaryClear rounded-3xl text-sm font-bold text-primaryVisible m-1"
    onClick={handleClearCart}
        >Vaciar Carrito</button>
    </>)
}

export default ClearCart

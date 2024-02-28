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
    <button className="w-[45%] ml-2 p-4 bg-orange rounded-[2rem] text-white text-sm font-bold uppercase"
    onClick={handleClearCart}
        >Vaciar Carrito</button>
    </>)
}

export default ClearCart

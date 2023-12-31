import { useEffect, useId } from 'react'
import ProductCart from '../../components/ProductCart/ProductCart'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsNoFilter } from '@redux/actions/Products/getAllProductsNoFilter'
import TotalCart from '../../components/ProductCart/TotalCart'

const Cart = () => {
  const dispatch = useDispatch()

  // PRODUCTOS ESTADO GLOBAL
  const allProducts = useSelector(state => state.allProducts)

  // PRODUCTOS LOCAL STORAGE (array solo con id y quantity)
  const productsLocal = JSON.parse(window.localStorage.getItem('productsLocal')) || []

  // FILTRAR Y CALCULAR SUBTOTALES
  const productsCart = productsLocal.map(cartItem => {
    const productsWithQuantity = allProducts.find(product => product.idProduct === Number(cartItem.id))
    return { ...productsWithQuantity, quantity: cartItem.quantity }
  })

  useEffect(() => {
    dispatch(getAllProductsNoFilter())
  }, [])

  return (
    <main className="pt-40">
      {
        productsCart.map(product => {
          return (
            <ProductCart
            key={useId()}
            id={product.idProduct}
            name={product.name}
            quantity={product.quantity}
            image={product.image}
            price={product.price}
            stock={product.stock}
            subtotal={product.price * product.quantity }
            />
          )
        })
      }
      <TotalCart
      key={useId()}
      products={productsCart}
      />

    </main>
  )
}

export default Cart

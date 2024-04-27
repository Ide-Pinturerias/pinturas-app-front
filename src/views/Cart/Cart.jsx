import { useEffect, useState } from 'react'
import ProductCart from '@components/Cart/ProductCart'
import TotalCart from '@components/Cart/TotalCart'
import PurchaseCart from '@components/Cart/PurchaseCart'
import ClearCart from '@components/Cart/ClearCart'
import { ButtonLink } from '@components/Controls/Links'
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner'
import { GetSpecificProducts } from '../../services/api'

const Cart = () => {
  const [productsCart, setProductsCart] = useState([])
  const [isLoading, setIsLoading] = useState(true) 

  const getProductsToCart = async () => {
    const productsLocal = JSON.parse(window.localStorage.getItem('productsLocal')) || []
    if (productsLocal.length !== 0) {
      const products = await GetSpecificProducts(productsLocal)
      setProductsCart(products)
    }
    setIsLoading(false) 
  }

  useEffect(() => {
    getProductsToCart()
  }, [])

  const renderProducts = () => (
    productsCart.map((product) => (
      <ProductCart
        key={product.idProduct}
        id={product.idProduct}
        name={product.name}
        quantity={product.quantity}
        image={product.image}
        price={product.price}
        stock={product.stock}
        subtotal={product.price * product.quantity}
      />
    ))
  );

  const renderEmptyCart = () => (
    <main className="pt-[5rem] grid justify-center items-center h-[100dvh]">
      <h1 className="text-2xl font-bold text-gray-700">No tienes productos en el carrito</h1>
      <div className="flex flex-row gap-2 w-full justify-center">
        <ButtonLink path="/products">Ir a productos</ButtonLink>
        <ButtonLink path="/">Volver al inicio</ButtonLink>
      </div>
    </main>
  );

  const renderCart = () => (
    <main className="pt-[5rem] grid justify-center items-center min-h-[100dvh]">
      {renderProducts()}
      <TotalCart products={productsCart} />
      <section className="flex justify-around">
        <PurchaseCart products={productsCart} />
        <ClearCart />
      </section>
    </main>
  );

  const renderLoading = () => (
    <main className="pt-[5rem] grid justify-center items-center h-[100dvh]">
      <LoadingSpinner />
    </main>
  );

  // Renderizados condicionales
  if (isLoading) {
    return renderLoading()
  } else {
    return productsCart.length === 0 ? renderEmptyCart() : renderCart()
  }
};

export default Cart;

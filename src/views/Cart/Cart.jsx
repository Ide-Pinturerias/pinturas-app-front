import { useEffect, useState } from 'react'
// import ProductCart from '@components/Cart/ProductCart'
// import TotalCart from '@components/Cart/TotalCart'
// import PurchaseCart from '@components/Cart/PurchaseCart'
// import ClearCart from '@components/Cart/ClearCart'
import { ButtonLink } from '@components/Controls/Links'
import { LoadingSpinner } from '../../components/Cart/LoadingSpinner'
import { GetSpecificProducts } from '../../services/api'
import { Button } from "@components/Controls/Buttons.jsx"
import CartList from '@components/Cart/CartList'

function Cart() {
    // LOCAL STATES:
    const [productsCart, setProductsCart] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // FUNCTIONS:
    const getProductsToCart = async () => {
        const productsLocal = JSON.parse(window.localStorage.getItem('productsLocal')) || []
        if (productsLocal.length !== 0) {
            const products = await GetSpecificProducts(productsLocal)
            setProductsCart(products)
        }
        setIsLoading(false)
    }

    // LIFE CYCLES:
    useEffect(() => {
        getProductsToCart()
    }, [])

    // COMPONENT:
    return (
        <main className="flex flex-col w-full h-full p-whiteSpaceTop mb-[50px] bg-bg">
            <section className="flex items-center justify-center w-full bg-bg">
                <div className="flex flex-col justify-center m-sides max-w-maxSc w-maxIn">
                    <h1 className="text-[50px] font-bold text-left uppercase">Carro</h1>
                    <div className="flex flex-col my-[50px] text-[clamp(10px,calc(.25rem+.75vw),1rem)]">
                        {
                            isLoading ? (
                                <div className="grid place-items-center">
                                    <LoadingSpinner />
                                </div>
                            ) : (
                                productsCart.length > 0 ? (
                                    <div className="flex justify-between gap-[5%]">
                                        <div className="flex flex-col w-[65%]">
                                            <div className="flex justify-between">
                                                <Button variant="secondary">Seleccionar todos</Button>
                                                <Button variant="danger">Vaciar carro</Button>
                                            </div>
                                            <div>
                                                <CartList products={productsCart} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-[30%] p-[32px]'>
                                            <span>Resumen del pedido</span>
                                            <div className="flex justify-between"><span>Cantidad de productos</span><span></span></div>
                                            <div className="flex justify-between"><span>Total</span><span></span></div>
                                            <Button variant="primary" className="w-full">Continuar compra</Button>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <p className="mb-[25px]">Su carro de compras está vacío.</p>
                                        <ButtonLink url='/products'>
                                            Continuar comprando
                                        </ButtonLink>
                                    </>
                                )
                            )
                        }
                    </div>
                </div>
            </section>
        </main>
    )

    // const renderProducts = () => (
    //     productsCart.map((product) => (
    //         <ProductCart
    //             key={product.idProduct}
    //             id={product.idProduct}
    //             name={product.name}
    //             quantity={product.quantity}
    //             image={product.image}
    //             price={product.price}
    //             stock={product.stock}
    //             subtotal={product.price * product.quantity}
    //         />
    //     ))
    // );

    // const renderEmptyCart = () => (
    //     <main className="pt-[5rem] grid justify-center items-center h-[100dvh]">
    //         <h1 className="text-2xl font-bold text-gray-700">No tienes productos en el carrito</h1>
    //         <div className="flex flex-row gap-2 w-full justify-center">
    //             <ButtonLink path="/products">Ir a productos</ButtonLink>
    //             <ButtonLink path="/">Volver al inicio</ButtonLink>
    //         </div>
    //     </main>
    // );

    // const renderCart = () => (
    //     <main className="pt-[5rem] grid justify-center items-center min-h-[100dvh]">
    //         {renderProducts()}
    //         <TotalCart products={productsCart} />
    //         <section className="flex justify-center">
    //             <PurchaseCart products={productsCart} />
    //             <ClearCart />
    //         </section>
    //     </main>
    // );

    // const renderLoading = () => (
    //     <main className="pt-[5rem] grid justify-center items-center h-[100dvh]">
    //         <LoadingSpinner />
    //     </main>
    // );

    // // Renderizados condicionales
    // if (isLoading) {
    //     return renderLoading()
    // } else {
    //     return productsCart.length === 0 ? renderEmptyCart() : renderCart()
    // }
};

export default Cart;

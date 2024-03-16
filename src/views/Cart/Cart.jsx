import { useEffect, useState } from 'react'
import { GetSpecificProducts } from '@api'
import { formatNumberWithDots } from "@scripts/formatNumberWithDots"
import { Button } from "@components/Controls/Buttons.jsx"
import { ButtonLink } from '@components/Controls/Links'
import { Accordion, AccordionHeader, AccordionBody } from '@components/Cart/Accordion'
import CartList from '@components/Cart/CartList'
import PurchaseCart from '@components/Cart/PurchaseCart'
import ClearCart from '@components/Cart/ClearCart'
import { LoadingSpinner } from '@components/Cart/LoadingSpinner'
import { Store, EnvelopeCheck, QuestionCircle, LocationMark, Calendar, Phone, ArrowUpRightCircle } from '@svg'

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

    // Retorna la cantidad total de items.
    const sumItems = () => {
        let total = 0;
        if (Array.isArray(productsCart) && productsCart.length > 0) {
            total = productsCart.reduce((acc, item) => acc + item.quantity, 0)
            return total
        }
        return 0 // Fallback.
    }

    // Retorna el precio a pagar (total).
    const sumPrice = () => {
        let total = 0;
        if (Array.isArray(productsCart) && productsCart.length > 0) {
            total = productsCart.reduce((acc, item) => {
                if (!item || typeof item !== "object" || isNaN(item.price) || isNaN(item.quantity)) {
                    return acc
                }
                return acc + (item.price * item.quantity)
            }, 0)
            if (!isNaN(total)) {
                total = total.toFixed(2)
                return formatNumberWithDots(total)
            }
        }
        return 0  // Fallback.
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
                                    <div className="flex justify-between">
                                        <div className="flex flex-col w-[65%]">
                                            <div className="flex justify-between mb-[32px]">
                                                <Button variant="secondary">Seleccionar todos</Button>
                                                <ClearCart setIsLoading={setIsLoading}/>
                                            </div>
                                            <CartList products={productsCart} />
                                        </div>
                                        <div className='flex flex-col w-[35%] py[32px] pl-[32px] text-[16px]'>
                                            <span className="mb-[32px] text-[20px] uppercase font-bold">Resumen del pedido</span>
                                            <div className="flex justify-between mb-[16px] text-[20px]"><span>Cantidad de productos</span><span>{sumItems()}</span></div>
                                            <div className="mb-[16px] p-[16px] bg-bgFocus rounded-[10px]">
                                                <div className="flex items-start gap-[8px] mb-[12px]">
                                                    <div className="relative top-[.18em]">
                                                        <Store size={18} />
                                                    </div>
                                                    <span className="leading-normal">La entrega del pedido es en la misma tienda.</span>
                                                </div>
                                                <div className="flex items-start gap-[8px]">
                                                    <div className="relative top-[.2em]">
                                                        <EnvelopeCheck size={18} />
                                                    </div>
                                                    <span className="leading-normal">Al momento de la compra, recibirá un correo que deberá mostrar al momento de recoger su pedido en la tienda.</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between mb-[16px] text-[32px] leading-none"><span>Total</span><span>{sumPrice()}</span></div>
                                            <PurchaseCart products={productsCart} setIsLoading={setIsLoading} />
                                            <ul className="mt-[50px]">
                                                <Accordion>
                                                    <AccordionHeader>
                                                        <QuestionCircle size={20} />
                                                        <span className="text-[20px] text-nowrap text-start font-bold leading-none">¿Necesitas ayuda?</span>
                                                    </AccordionHeader>
                                                    <AccordionBody>
                                                        <p className="mb-[16px]">Estaremos encantados de atenderte para asegurar que su compra sea una experiencia satisfactoria y sin contratiempos.</p>
                                                        <button className="flex"><Phone />Llámanos</button>
                                                    </AccordionBody>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionHeader>
                                                        <LocationMark size={20} />
                                                        <span className="text-[20px] text-nowrap text-start font-bold leading-none">Ubicación de la tienda</span>
                                                    </AccordionHeader>
                                                    <AccordionBody>
                                                        <span className="block">RP5, Esquina La Isla Anisacate, Córdoba.</span>
                                                        <a className="block">
                                                            Ver en Google Maps
                                                            <div className="inline-block align-middle ml-[6px]">
                                                                <ArrowUpRightCircle />
                                                            </div>
                                                        </a>
                                                    </AccordionBody>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionHeader>
                                                        <Calendar size={20} />
                                                        <span className="text-[20px] text-nowrap text-start font-bold leading-none">Horarios de despacho</span>
                                                    </AccordionHeader>
                                                    <AccordionBody>
                                                        <span className="block">Lunes a sábado: 8:00 a.m. - 4:00 p.m.</span>
                                                        <span className="block">Domingo: 9:00 a.m. - 1:00 p.m.</span>
                                                        <strong className="block mt-[4px] text-[12px]">*Normalmente su pedido se encuentra disponible 30 minutos después de haber realizado la compra.</strong>
                                                    </AccordionBody>
                                                </Accordion>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <p className="mb-[25px]">Su carro de compras está vacío.</p>
                                        <ButtonLink path='/products'>
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
}

export default Cart;
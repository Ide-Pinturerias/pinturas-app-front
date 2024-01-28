import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getBestSellers } from '@redux/actions/Products/getBestSellers'

import CardRegular from '../ProductCards/CardRegular'
// import featuredBanner from '@img/featured-banner.png'

function FeaturedContainer() {
    const bestSellers = useSelector((state) => state.bestSellers)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBestSellers(4))
    }, [dispatch])

    return (
        <section className="relative flex flex-col items-center w-full mt-[50px] text-white">
            <div className="flex flex-col justify-center items-center m-sides max-w-maxSc w-maxIn">
                {/* OP1: */}
                {/* <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-full overflow-hidden leading-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="relative block w-[calc(135%+1.3px)] fill-accentClear" viewBox="0 0 1200 120">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-full bg-accentClear ' />
                <div className='relative z-10 w-full text-start'>
                    <h2 className="text-[clamp(.75rem,calc(0.5rem+3vw),3.5rem)]">Productos más vendidos.</h2>
                    <p className="text-xl">Las mejores opciones para transformar sus espacios con estilo</p>
                </div> */}
                {/* <img0
                    src={featuredBanner}
                    alt="Los más vendidos. Top ventas."
                    className="object-cover w-full h-[120px] bg-bgFocus rounded-lg text-clear select-none"
                /> */}
                {/* OP2: */}
                <div className='flex flex-col items-center justify-between bg-primaryClear w-full rounded-xl p-4 pb-5'>
                    <h2 className="text-[clamp(.75rem,calc(0.5rem+2.5vw),3.5rem)] font-bold">Top ventas</h2>
                    <p className="text-xl">Las mejores opciones para transformar sus espacios con estilo</p>
                </div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center w-full mt-6">
                    {
                        bestSellers.map((bestSeller) => (
                            <CardRegular
                                key={bestSeller.idProduct}
                                id={bestSeller.idProduct}
                                image={bestSeller.image}
                                name={bestSeller.name}
                                price={bestSeller.price}
                                prodpackage={bestSeller.prodpackage}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedContainer

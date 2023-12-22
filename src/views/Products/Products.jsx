import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllProductsPaginated } from '@redux/actions/Products/getAllProductsPaginated'
import { getAllCategories } from '@redux/actions/Categories/getAllCategories'
import { getAllProductsFiltered } from '@redux/actions/filters/getAllProductsFiltered'
import { setCategory } from '@redux/actions/filters/setCategory'
import { setPage } from '@redux/actions/Page/setPage'
import { setLowPrice } from '@redux/actions/filters/setLowPrice'
import { setHighPrice } from '@redux/actions/filters/setHighPrice'

import Paginated from '../../components/Paginated/Paginated'

// import FeaturedContainer from '@components/FeaturedContainer/FeaturedContainer'
// import ProductsContainer from '@components/ProductsContainer/ProductsContainer'
import ProductBox from '../../components/ProductBox/ProductBox'
import { Chevron } from '../../components/SVG'

function ProductsPage() {
    // GLOBAL STATES:
    const filterCategory = useSelector((state) => state.filterCategory)
    const categories = useSelector((state) => state.categories)
    const totalPages = useSelector((state) => state.totalPages)
    const thisPage = useSelector((state) => state.thisPage)
    const { high, low } = useSelector((state) => state.price)

    // LOCAL STATES:
    const [isLoading, setIsLoading] = useState(true)

    // CONSTANTS:
    const dispatch = useDispatch()

    // FUNCTIONS:
    const handleCategory = (category) => {
        dispatch(setPage(1))
        dispatch(setCategory(category))
    }

    const handlePriceFilter = (priceFilter) => {
        if (priceFilter === 'Hasta $10000') {
            dispatch(setPage(1))
            dispatch(setLowPrice(0))
            dispatch(setHighPrice(10000))
        } else if (priceFilter === '$10000 a $20000') {
            dispatch(setPage(1))
            dispatch(setLowPrice(10000))
            dispatch(setHighPrice(20000))
        } else if (priceFilter === 'Mas de $20000') {
            dispatch(setPage(1))
            dispatch(setLowPrice(20000))
            dispatch(setHighPrice(0))
        } else if (priceFilter === 'no price') {
            dispatch(setPage(1))
            dispatch(setLowPrice(0))
            dispatch(setHighPrice(0))
        }
    }

    const filterProducts = (page) => {
        let selectedPage;
        selectedPage = page || thisPage
        if (filterCategory || low || high) {
            dispatch(getAllProductsFiltered(selectedPage, filterCategory, low, high))
                .then(() => setIsLoading(false))
        } else {
            dispatch(getAllProductsPaginated(selectedPage))
                .then(() => setIsLoading(false))
        }
    }

    const handlePageChange = (page) => {
        dispatch(setPage(page))
    }

    // LIFE CYCLES:
    useEffect(() => {
        setIsLoading(true)
        if (!filterCategory) dispatch(getAllCategories())
        filterProducts(null)
    }, [dispatch, low, high, thisPage, filterCategory])

    // COMPONENT:
    return (
        <main className="relative flex flex-col items-center w-full before:content-none before:absolute before:-z-50 before:top-0 before:left-0 before:h-[100vh] before:min-w-full before:bg-primary">
            <section className="flex justify-center h-screen p-whiteSpaceTop w-full text-white bg-orange">
                <div className="flex flex-col justify-between max-w-[1920px] h-full w-full pb-12 px-[3.5%]">
                    <div>
                        <h2 className="relative mt-[5rem] w-fit text-[clamp(.75vw,calc(7vw+.5rem),6rem)] font-bold before:content-none before:absolute before:-z-10 before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[125%] before:w-full before:bg-warmWhite before:rounded-[2rem] font-heading"> Todos nuestros productos </h2>
                        <p className="mb-[5rem] text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                            Somos un distribuidor oficial de pinturas Fadepa. En nuestra tienda encontrarás barniz, aditivos, diluyentes, entre otros.
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="p-4 bg-white rounded-[1rem] text-black text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                            Filtrar
                        </button>
                        <Chevron width={'5rem'} />
                        <button className="p-4 bg-white rounded-[1rem] text-black text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                            Ordenar
                        </button>
                    </div>
                </div>
            </section>
            <section className="text-base flex flex-col p-6 sm:w-70 bg-tertiary text-gray rounded-2xl">
                {/*       SIDE BAR     */}
                <div className="gap-3">
                    <div className="h-10 flex gap-1 mb-3">
                        {/*          CLEAR FILTERS        */}
                        {filterCategory && (
                            <div className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1">
                                {filterCategory}
                                <button onClick={() => handleCategory('')}>X</button>
                            </div>
                        )}
                        {high === 0 && low !== 0 && low && (
                            <p className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1">
                                Desde ${low}
                                <button onClick={() => handlePriceFilter('no price')}>
                                    X
                                </button>
                            </p>
                        )}
                        {low === 0 && high !== 0 && high && (
                            <p className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1">
                                Hasta ${high}
                                <button onClick={() => handlePriceFilter('no price')}>
                                    X
                                </button>
                            </p>
                        )}
                        {low !== 0 && high !== 0 && high && low && (
                            <p className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1">
                                ${low} hasta ${high}
                                <button onClick={() => handlePriceFilter('no price')}>
                                    X
                                </button>
                            </p>
                        )}
                    </div>
                    <div className="mb-5">
                        {/*       FILTER CATEGORY      */}
                        <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
                            Categorias
                        </h2>
                        <div className="text-lg flex flex-col">
                            {categories.map((category, index) => (
                                <h3
                                    key={index}
                                    rel="noopener noreferrer"
                                    onClick={() => handleCategory(category)}
                                    className={`mt-1 no-underline text-sm ${filterCategory === category
                                        ? 'text-indigo-900'
                                        : 'text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
                                        } m-0`}
                                >
                                    {category}
                                </h3>
                            ))}
                        </div>
                    </div>
                    <div className="mb-5">
                        {/*       FILTER PRICE         */}
                        <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
                            Precio
                        </h2>
                        <div className="text-lg flex flex-col flex-wrap">
                            <h3
                                className={`mt-1 no-underline text-sm ${!low && high === 10000
                                    ? 'text-indigo-900'
                                    : 'text-gray-400  hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
                                    } m-0`}
                                onClick={() => handlePriceFilter('Hasta $10000')}
                            >
                                Hasta $10.000
                            </h3>
                        </div>
                        <div className="text-lg flex flex-col">
                            <h3
                                className={`mt-1 no-underline text-sm ${low === 10000 && high === 20000
                                    ? 'text-indigo-900'
                                    : 'text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
                                    } m-0`}
                                onClick={() => handlePriceFilter('$10000 a $20000')}
                            >
                                $10.000 a $20.000
                            </h3>
                        </div>
                        <div className="text-lg flex flex-col">
                            <h3
                                className={`mt-1 no-underline text-sm ${low === 20000 && high === ''
                                    ? 'text-indigo-900'
                                    : 'text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
                                    } m-0`}
                                onClick={() => handlePriceFilter('Mas de $20000')}
                            >
                                Más de $20.000
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center w-full py-16 bg-complementaryWhite">
                <ProductBox isLoading={isLoading} />
            </section>

            <section>
                <Paginated
                    totalPages={totalPages}
                    thisPage={thisPage}
                    pageChange={handlePageChange}
                />
            </section>
            {/* <div>
                <FeaturedContainer />
            </div> */}
        </main>
    )
};

export default ProductsPage

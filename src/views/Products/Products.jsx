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
import FilterMenu from '../../components/Refiners/FilterMenu'
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
    const [isModalOpen, setIsModalOpen] = useState(false)

    // CONSTANTS:
    const dispatch = useDispatch()

    // FUNCTIONS:
    const filterByCategory = (category) => {
        dispatch(setPage(1))
        dispatch(setCategory(category))
    }

    const filterByPrice = (priceFilter) => {
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

    const changePage = (page) => {
        dispatch(setPage(page))
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
                        <button className="p-4 bg-white rounded-[1rem] text-black text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]" onClick={(e) => {
                            e.stopPropagation();
                            setIsModalOpen(true)
                        }}>
                            Filtrar
                        </button>
                        <Chevron width={'5rem'} />
                        <button className="p-4 bg-white rounded-[1rem] text-black text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                            Ordenar
                        </button>
                    </div>
                </div>
            </section>
            {
                isModalOpen ? (
                    <div className="fixed z-50 top-0 bottom-0 left-0 right-0 w-full bg-overlay" >
                        <FilterMenu
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                            categories={categories}
                            high={high}
                            low={low}
                            filterCategory={filterCategory}
                            filterByCategory={filterByCategory}
                            filterByPrice={filterByPrice}
                        />
                    </div>
                ) : null
            }
            <section className="flex justify-center w-full py-16 bg-complementaryWhite">
                <ProductBox isLoading={isLoading} />
            </section>

            <section>
                <Paginated
                    totalPages={totalPages}
                    thisPage={thisPage}
                    pageChange={changePage}
                />
            </section>
            {/* <div>
                <FeaturedContainer />
            </div> */}
        </main>
    )
};

export default ProductsPage

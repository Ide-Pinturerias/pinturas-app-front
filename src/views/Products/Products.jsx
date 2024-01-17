import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllProductsPaginated } from '@redux/actions/Products/getAllProductsPaginated'
import { getAllCategories } from '@redux/actions/Categories/getAllCategories'
import { getAllProductsFiltered } from '@redux/actions/filters/getAllProductsFiltered'
import { setCategory } from '@redux/actions/filters/setCategory'
import { setPage } from '@redux/actions/Page/setPage'
import { setLowPrice } from '@redux/actions/filters/setLowPrice'
import { setHighPrice } from '@redux/actions/filters/setHighPrice'
import { setSortClause, setSortDirection } from '../../redux/actions/filters/sort'

import Paginated from '../../components/Paginated/Paginated'

// import FeaturedContainer from '@components/FeaturedContainer/FeaturedContainer'
// import ProductsContainer from '@components/ProductsContainer/ProductsContainer'
import ProductBox from '../../components/ProductBox/ProductBox'
import FilterMenu from '../../components/Refiners/FilterMenu'
import SortMenu from '../../components/Refiners/SortMenu'
import { Chevron, XSmall } from '../../components/SVG'

function ProductsPage() {
    // GLOBAL STATES:
    const filterCategory = useSelector((state) => state.filterCategory)
    const categories = useSelector((state) => state.categories)
    const totalPages = useSelector((state) => state.totalPages)
    const thisPage = useSelector((state) => state.thisPage)
    const { highPrice, lowPrice } = useSelector((state) => state.price)
    const sortBy = useSelector((state) => state.sortBy)
    const orderBy = useSelector((state) => state.orderBy)

    // LOCAL STATES:
    const [isLoading, setIsLoading] = useState(true)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isSortOpen, setIsSortOpen] = useState(false)

    // CONSTANTS:
    const dispatch = useDispatch()

    // FUNCTIONS:
    const sortByClauseAndDirection = (clause, direction) => {
        if (clause) dispatch(setSortClause(clause))
        if (direction) dispatch(setSortDirection(direction))
    }

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
        if (filterCategory || lowPrice || highPrice || sortBy || orderBy) {
            dispatch(getAllProductsFiltered(selectedPage, filterCategory, lowPrice, highPrice, sortBy, orderBy))
                .then(() => setIsLoading(false))
        } else {
            dispatch(getAllProductsPaginated(selectedPage))
                .then(() => setIsLoading(false))
        }
    }

    const clearFilters = () => {
        dispatch(setPage(1))
        dispatch(setCategory(""))
        dispatch(setLowPrice(0))
        dispatch(setHighPrice(0))
    }

    // LIFE CYCLES:    
    useEffect(() => {
        setIsLoading(true)
        if (!filterCategory) dispatch(getAllCategories())
        filterProducts(null)
    }, [dispatch, lowPrice, highPrice, thisPage, filterCategory, sortBy, orderBy])


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
                        <button className={` ${isSortOpen ? "z-[60]" : ""} p-4 bg-white rounded-[1rem] text-black text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]`} onClick={(e) => {
                            e.stopPropagation();
                            setIsSortOpen(false);
                            setIsFilterOpen(true)
                        }}>
                            Filtrar
                        </button>
                        <Chevron width={'5rem'} />
                        <button className={`${isFilterOpen ? "z-[60]" : ""} p-4 bg-white rounded-[1rem] text-black text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]`} onClick={(e) => {
                            e.stopPropagation();
                            setIsFilterOpen(false);
                            setIsSortOpen(true)
                        }}>
                            Ordenar
                        </button>
                    </div>
                </div>
            </section>
            {
                isFilterOpen ? (
                    <div className="fixed z-50 top-0 bottom-0 left-0 right-0 w-full bg-overlay" >
                        <FilterMenu
                            isFilterOpen={isFilterOpen}
                            setIsFilterOpen={setIsFilterOpen}
                            categories={categories}
                            highPrice={highPrice}
                            lowPrice={lowPrice}
                            filterCategory={filterCategory}
                            filterByCategory={filterByCategory}
                            filterByPrice={filterByPrice}
                            clearFilters={clearFilters}
                        />
                    </div>
                ) : null
            }
            {
                isSortOpen ? (
                    <div className="fixed z-50 top-0 bottom-0 left-0 right-0 flex w-full bg-overlay">
                        <SortMenu
                            isSortOpen={isSortOpen}
                            setIsSortOpen={setIsSortOpen}
                            sortBy={sortBy}
                            orderBy={orderBy}
                            sortByClauseAndDirection={sortByClauseAndDirection}
                        />
                    </div>
                ) : null
            }
            <section className="flex flex-col items-center justify-center w-full py-16 bg-complementaryWhite">
                <div className="flex justify-center items-center flex-wrap gap-4 w-full">
                    {/*          CLEAR FILTERS        */}
                    {filterCategory && (
                        <button
                            className="w-fit flex items-center justify-center box-border px-[.75%] py-[.25%] border-[1.5px] rounded-[15px] border-orange text-sm text-orange tracking-[.25px]"
                            onClick={() => filterByCategory('')}
                        >
                            <span className="whitespace-nowrap">{filterCategory}</span>
                            <XSmall side={20} />
                        </button>
                    )}
                    {highPrice === 0 && lowPrice !== 0 && lowPrice && (
                        <button
                            className="w-fit flex items-center justify-center box-border px-[.75%] py-[.25%] border-[1.5px] rounded-[15px] border-orange text-sm text-orange tracking-[.25px]"
                            onClick={() => filterByPrice('no price')}
                        >
                            <span className="whitespace-nowrap">Desde ${lowPrice}</span>
                            <XSmall side={20} />
                        </button>
                    )}
                    {lowPrice === 0 && highPrice !== 0 && highPrice && (
                        <button
                            className="w-fit flex items-center justify-center box-border px-[.75%] py-[.25%] border-[1.5px] rounded-[15px] border-orange text-sm text-orange tracking-[.25px]"
                            onClick={() => filterByPrice('no price')}
                        >
                            <span className="whitespace-nowrap">Hasta ${highPrice}</span>
                            <XSmall side={20} />
                        </button>
                    )}
                    {lowPrice !== 0 && highPrice !== 0 && highPrice && lowPrice && (
                        <button
                            className="w-fit flex items-center justify-center box-border px-[.75%] py-[.25%] border-[1.5px] rounded-[15px] border-orange text-sm text-orange tracking-[.25px]"
                            onClick={() => filterByPrice('no price')}
                        >
                            <span className="whitespace-nowrap">${lowPrice} hasta ${highPrice}</span>
                            <XSmall side={20} />
                        </button>
                    )}
                </div>
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

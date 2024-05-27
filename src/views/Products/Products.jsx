import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsPaginated } from '@redux/actions/Products/getAllProductsPaginated'
import { getAllCategories } from '@redux/actions/Categories/getAllCategories'
import { getAllProductsFiltered } from '@redux/actions/filters/getAllProductsFiltered'
import { setCategory } from '@redux/actions/filters/setCategory'
import { setPage } from '@redux/actions/pagination/setPage'
import { setLowPrice } from '@redux/actions/filters/setLowPrice'
import { setHighPrice } from '@redux/actions/filters/setHighPrice'
import { setSortClause, setSortDirection } from '@/redux/actions/filters/sort'
import Paginated from '@components/Paginated/Paginated'
import ProductBox from '@components/ProductBox/ProductBox'
import FilterMenu from '@components/Refiners/FilterMenu'
import SortMenu   from '@components/Refiners/SortMenu'
import { XSmall } from '@svg'
import { SearchBar } from "@components/SearchBar/SearchBar"

function ProductsPage () {
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
    const selectedPage = page || thisPage
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
    dispatch(setCategory(''))
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
            <section className="flex flex-col items-center justify-center w-full py-20 bg-bg">
                <div className="flex flex-col justify-between max-w-[1920px] h-full w-full px-[3.5%]">            
                    <div className="flex justify-between items-center">
                        <button className={` ${isSortOpen ? 'xs:z-[60]' : ''} p-1 bg-white rounded-[1rem] text-clear text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]`} onClick={(e) => {
                          e.stopPropagation()
                          setIsSortOpen(false)
                          setIsFilterOpen(true)
                        }}>
                            Filtrar
                        </button>
                        <SearchBar size={"5 rem"}/>
                        <button className={`${isFilterOpen ? 'xs:z-[60]' : ''} p-1 bg-white rounded-[1rem] text-clear text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]`} onClick={(e) => {
                          e.stopPropagation()
                          setIsFilterOpen(false)
                          setIsSortOpen(true)
                        }}>
                            Ordenar
                        </button>
                    </div>
                </div>
            </section>
            <div className={`fixed z-50 top-0 bottom-0 left-0 right-0 flex items-end w-full bg-overlay ${isFilterOpen || isSortOpen ? "opacity-100 visible" : "opacity-0 invisible"} transition-all`}>
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
                <SortMenu
                    isSortOpen={isSortOpen}
                    setIsSortOpen={setIsSortOpen}
                    sortBy={sortBy}
                    orderBy={orderBy}
                    sortByClauseAndDirection={sortByClauseAndDirection}
                />
            </div>
            <section className="flex flex-col items-center justify-center w-full bg-bg">
                <div className="flex justify-center items-center flex-wrap gap-4 mb-8 w-full">
                    {highPrice === 0 && lowPrice !== 0 && lowPrice && (
                        <button
                            className="w-fit flex items-center justify-center box-border px-[.75%] py-[.25%] border-[1.5px] rounded-[15px] border-primaryClear text-sm text-primaryClear tracking-[.25px]"
                            onClick={() => filterByPrice('no price')}
                        >
                            <span className="whitespace-nowrap">Desde ${lowPrice}</span>
                            <XSmall size={20} />
                        </button>
                    )}
                    {lowPrice === 0 && highPrice !== 0 && highPrice && (
                        <button
                            className="w-fit flex items-center justify-center box-border px-[.75%] py-[.25%] border-[1.5px] rounded-[15px] border-primaryClear text-sm text-primaryClear tracking-[.25px]"
                            onClick={() => filterByPrice('no price')}
                        >
                            <span className="whitespace-nowrap">Hasta ${highPrice}</span>
                            <XSmall size={20} />
                        </button>
                    )}
                    {lowPrice !== 0 && highPrice !== 0 && highPrice && lowPrice && (
                        <button
                            className="w-fit flex items-center justify-center box-border px-[.75%] py-[.25%] border-[1.5px] rounded-[15px] border-primaryClear text-sm text-primaryClear tracking-[.25px]"
                            onClick={() => filterByPrice('no price')}
                        >
                            <span className="whitespace-nowrap">${lowPrice} hasta ${highPrice}</span>
                            <XSmall size={20} />
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
        </main>
  )
};

export default ProductsPage

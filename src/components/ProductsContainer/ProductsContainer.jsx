import { useEffect, useState } from 'react'
import ProductCard from '../Products/ProductCard'
import Paginated from '../Paginated/Paginated'
// import SearchBar from '../SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux'
import { allProducts } from '@redux/actions/Products/allProducts'
import { getProductFilter } from '@redux/actions/filters/getProductFilter'
import { setPage } from '@redux/actions/Page/setPage'
import { setCategory } from '@redux/actions/filters/setCategory'
import { setLowPrice } from '@redux/actions/filters/setLowPrice'
import { setHighPrice } from '@redux/actions/filters/setHighPrice'
import imgNO from '@img/ProductoNo.png'

function ProductsContainer () {
  // GLOBAL STATES:
  const products = useSelector((state) => state.products)
  const categories = useSelector((state) => state.categories)
  const totalPages = useSelector((state) => state.totalPages)
  const thisPage = useSelector((state) => state.thisPage)
  const filterCategory = useSelector((state) => state.filterCategory)
  const { high, low } = useSelector((state) => state.price)

  // LOCAL STATES:
  const [isLoading, setIsLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState(products)

  // CONST:
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

  const handlePageChange = (page) => {
    dispatch(setPage(page))
    if (filterCategory || low || high) {
      dispatch(getProductFilter(page, filterCategory, low, high)).then(() => {
        setIsLoading(false)
      })
    } else {
      dispatch(allProducts(page)).then(() => {
        setIsLoading(false)
      })
    }
  }

  // LIFE CYCLES:
  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Agrega una transición suave al desplazamiento
    })
    setIsLoading(true)
    if (filterCategory || low || high) {
      dispatch(getProductFilter(thisPage, filterCategory, low, high)).then(
        () => {
          setIsLoading(false)
        }
      )
    } else {
      dispatch(allProducts(thisPage)).then(() => {
        setIsLoading(false)
      })
    }
  }, [dispatch, filterCategory, low, high, thisPage])

  // COMPONENT:
  return (
        <div>
            <div className="flex w-full justify-center gap-16">
                <div>
                    <div className="flex justify-center ">
                        {/*       SIDE BAR     */}
                        <aside className="inline-block p-6 sm:w-70 bg-tertiary text-gray rounded-2xl">
                            <div className="text-base flex flex-col">
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
                            </div>
                        </aside>
                    </div>
                </div>
                <div>
                    {/*       CARDS & PAGINATED     */}
                    <div className="w-full flex m-auto flex-col justify-center">
                        <div className="flex justify-center">
                            {isLoading
                              ? (
                                    <img
                                        src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif"
                                        alt="loading"
                                        className="w-11/12 flex justify-center items-center"
                                    />
                                )
                              : (
                                    <div >
                                        {filteredProducts.length > 0
                                          ? (<div className="grid grid-cols-1 gap-1 place-items-center md:gap-3 md:grid-cols-2 lg:gap-4 lg:grid-cols-3 xl:gap-5 xl:grid-col-4 2xl:grid-col-5">
                                                {filteredProducts.map((product) => (
                                                    <div
                                                        key={product.idProduct}
                                                        className="bg-violet-300 p-4 rounded-md shadow-md"
                                                    >
                                                        <ProductCard
                                                            idProduct={product.idProduct}
                                                            image={product.image}
                                                            name={product.name}
                                                            price={product.price}
                                                            package={product.package}
                                                            isFavorite={product.isFavorite}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            )
                                          : (
                                                <div className=" flex justify-center flex-col items-center">
                                                    <h1 className="text-blue-400 text-2xl mb-8 text-center ">
                                                        Oops! Actualmente no tenemos el producto que estás
                                                        buscando.
                                                    </h1>
                                                    <img src={imgNO} alt="NO Encontrado" className="w-120" />
                                                </div>
                                            )}
                                    </div>
                                )}
                        </div>
                        <div className="w-full flex justify-center items-center my-7">
                            {/*     PAGINATED     */}
                            {!isLoading && (
                                <Paginated
                                    totalPages={totalPages}
                                    thisPage={thisPage}
                                    pageChange={handlePageChange}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
};

export default ProductsContainer

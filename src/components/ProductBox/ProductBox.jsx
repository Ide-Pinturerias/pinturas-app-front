import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { allProducts } from '@redux/actions/Products/allProducts'
import { getProductFilter } from '@redux/actions/filters/getProductFilter'
import { setPage } from '@redux/actions/Page/setPage'
import { setCategory } from '@redux/actions/filters/setCategory'
import { setLowPrice } from '@redux/actions/filters/setLowPrice'
import { setHighPrice } from '@redux/actions/filters/setHighPrice'

import CardRegular from '../ProductCards/CardRegular'

function ProductBox () {
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

  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 place-items-center w-[93%] max-w-[1920px] mx-[3.5%]">
            {
                filteredProducts.map((product) => (
                    <CardRegular
                        key={product.idProduct}
                        id={product.idProduct}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        package={product.package}
                    />
                ))
            }

        </div>
  )
};

export default ProductBox

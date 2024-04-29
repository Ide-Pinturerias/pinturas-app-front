import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getBestSellers } from '@redux/actions/Products/getBestSellers'
import { GetSimilarProducts } from '@api'

import CardRegular from '../ProductCards/CardRegular'
// import featuredBanner from '@img/featured-banner.png'

function FeaturedContainer ({ bestSellersContainer, similarProductsContainer, similarProductsContainerOptions }) {
  // GLOBAL STATES:
  const bestSellers = useSelector((state) => state.bestSellers)

  // LOCAL STATES:
  const [products, setProducts] = useState([])

  // CONST:
  const dispatch = useDispatch()

  // LIFE CYCLES:
  useEffect(() => {
    (async () => {
      if (bestSellersContainer) {
        dispatch(getBestSellers(4))
      } else if (similarProductsContainer) {
        const similarProducts = await GetSimilarProducts(similarProductsContainerOptions)
        setProducts(similarProducts)
      }
    })()
  }, [bestSellersContainer, similarProductsContainer, dispatch])

  useEffect(() => {
    if (bestSellersContainer) {
      setProducts(bestSellers)
    }
  }, [bestSellersContainer, similarProductsContainer, bestSellers, dispatch])

  // COMPONENT:
  return (
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-start w-full mt-6">
            {
                Array.isArray(products) && products.map((bestSeller) => (
                    <CardRegular
                        key={bestSeller.idProduct}
                        id={bestSeller.idProduct}
                        name={bestSeller.name}
                        category={bestSeller.category}
                        color={bestSeller.color}
                        image={bestSeller.image}
                        brand={bestSeller.patent}
                        price={bestSeller.price}
                    />
                ))
            }
        </div>
  )
}

export default FeaturedContainer

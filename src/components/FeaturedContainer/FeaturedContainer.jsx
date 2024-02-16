import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getBestSellers } from '@redux/actions/Products/getBestSellers'
import { getSimilarProducts } from '@/redux/actions/Products/getSimilarProducts'

import CardRegular from '../ProductCards/CardRegular'
// import featuredBanner from '@img/featured-banner.png'

function FeaturedContainer({ bestSellersContainer, similarProductsContainer, similarProductsContainerOptions }) {


    // GLOBAL STATES:
    const bestSellers = useSelector((state) => state.bestSellers);
    const similarProducts = useSelector((state) => state.similarProducts);

    // LOCAL STATES:
    const [products, setProducts] = useState([]);

    // CONST:
    const dispatch = useDispatch()

    // LIFE CYCLES:
    useEffect(() => {
        if (bestSellersContainer) {
            dispatch(getBestSellers(4));
        } else if (similarProductsContainer) {
            dispatch(getSimilarProducts(similarProductsContainerOptions));
        }

    }, [bestSellersContainer, similarProductsContainer, dispatch]);

    useEffect(() => {
        if (bestSellersContainer) {
            setProducts(bestSellers);
        } else if (similarProductsContainer) {
            setProducts(similarProducts);
        }
    }, [bestSellersContainer, similarProductsContainer, bestSellers, similarProducts, dispatch]);

    useEffect(() => {
        console.log(products)
    }, [products])

    // COMPONENT:
    return (
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center w-full mt-6">
            {
                products.map((bestSeller) => (
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

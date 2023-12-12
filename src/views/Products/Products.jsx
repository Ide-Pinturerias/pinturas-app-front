import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { allProducts } from '@redux/actions/Products/allProducts'
import { allCategories } from '@redux/actions/Categories/allCategories'
import { getProductFilter } from '@redux/actions/filters/getProductFilter'
import { getBestSellers } from '@redux/actions/Products/getBestSellers'
import { setPage } from '@redux/actions/Page/setPage'

import Paginated from '../../components/Paginated/Paginated'

// import FeaturedContainer from '@components/FeaturedContainer/FeaturedContainer'
// import ProductsContainer from '@components/ProductsContainer/ProductsContainer'
import ProductBox from '../../components/ProductBox/ProductBox'
import { Chevron } from '../../components/SVG'

function ProductsPage() {


    // GLOBAL STATES:
    const filterCategory = useSelector((state) => state.filterCategory)
    const totalPages = useSelector((state) => state.totalPages)
    const thisPage = useSelector((state) => state.thisPage)


    // CONSTANTS:
    const dispatch = useDispatch()


    // FUNCTIONS:
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
        dispatch(allProducts(thisPage))
        if (!filterCategory) {
            dispatch(allCategories())
        } else {
            dispatch(getProductFilter(thisPage, filterCategory))
        };
    }, [dispatch, thisPage, filterCategory])

    useEffect(() => {
        dispatch(getBestSellers())
    }, [dispatch])


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
            <section className="flex justify-center w-full py-16 bg-complementaryWhite">
                <ProductBox />
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

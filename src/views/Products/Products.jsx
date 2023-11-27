import { useEffect } from 'react'
import FeaturedContainer from '@components/FeaturedContainer/FeaturedContainer'
import { bestSellers } from '@redux/actions/Products/bestSellers'
import ProductsContainer from '@components/ProductsContainer/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts } from '@redux/actions/Products/allProducts'
import { allCategories } from '@redux/actions/Categories/allCategories'
import { getProductFilter } from '@redux/actions/filters/getProductFilter'
import { Chevron } from '../../components/SVG'


function ProductsPage() {


    // GLOBAL STATES:
    const filterCategory = useSelector((state) => state.filterCategory);
    const thisPage = useSelector((state) => state.thisPage);

    const dispatch = useDispatch();


    // LIFE CYCLES:
    useEffect(() => {
        dispatch(allProducts(thisPage));
        if (!filterCategory) {
            dispatch(allCategories());
        } else {
            dispatch(getProductFilter(thisPage, filterCategory));
        };
    }, [dispatch, thisPage, filterCategory]);

    useEffect(() => {
        dispatch(bestSellers());
    }, [dispatch]);


    // COMPONENT:
    return (
        <main className="relative p-whiteSpaceTop w-full before:content-[''] before:absolute before:-z-50 before:top-0 before:left-0 before:h-[100vh] before:min-w-full before:bg-primary">
            <section className="mb-[8rem] text-white">
                <div className="max-w-[1920px] px-[3.5%]">
                    <h2 className="relative mt-[5rem] w-fit text-[clamp(.75vw,calc(7vw+.5rem),6rem)] font-bold before:content-none before:absolute before:-z-10 before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[125%] before:w-full before:bg-warmWhite before:rounded-[2rem]"> Todos nuestros productos </h2>
                    <p className="mb-[5rem] text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                        Contamos con una gran seleccion de productos. Entre ellas destacamos las pinturas Fadema.
                    </p>
                    <div className="flex justify-between items-center">
                        <button className="p-4 bg-white rounded-[1rem] text-black text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                            Filtrar
                        </button>
                        <Chevron width={"5rem"} />
                        <button className="p-4 bg-white rounded-[1rem] text-black text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                            Ordenar
                        </button>
                    </div>
                </div>
            </section>
            <section className="mb-[8rem] text-white">
                <div className="max-w-[1920px] px-[3.5%]">
                    <h2 className="relative mt-[5rem] w-fit text-[clamp(.75vw,calc(7vw+.5rem),6rem)] font-bold before:content-none before:absolute before:-z-10 before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[125%] before:w-full before:bg-warmWhite before:rounded-[2rem]"> Todos nuestros productos </h2>
                    <p className="mb-[5rem] text-[clamp(.5vw,calc(1.5vw+.3rem),2.5rem)]">
                        Contamos con una gran seleccion de productos. Entre ellas destacamos las pinturas Fadema.
                    </p>
                </div>
            </section>
            {/* <div>
                <ProductsContainer />
            </div> */}

            {/* <div>
                <FeaturedContainer />
            </div> */}
        </main>
    );
};


export default ProductsPage;
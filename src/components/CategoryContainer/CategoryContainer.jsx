import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setPage } from '@redux/actions/Page/setPage'
import { setCategory } from '@redux/actions/filters/setCategory'
// Banners
import category2 from '@img/especiales.png'
import category3 from '@img/esmalte.png'
import category4 from '@img/cal.png'
import category5 from '@img/fondos.png'
import category6 from '@img/tintas.png'
import category7 from '@img/ecologico.png'
import category8 from '@img/industriales.png'
import category9 from '@img/latex.png'
import category10 from '@img/impermeabilizante.png'
import category11 from '@img/fijadores.png'
import category13 from '@img/auxiliares.png'
import category14 from '@img/madera.png'


const afterPseudo = `
    after:content-[""] after:absolute after:-z-10 after:opacity-0 after:-inset-2 
    after:rounded-lg after:shadow-main after:bg-bgFocus 
    after:border after:border-hightlight 
    after:transition-focus after:ease-linear after:duration-100 

    hover:after:opacity-100
    focus:after:opacity-100

    focus:after:outline focus:after:outline-focus focus:after:outline-offset-focus 
    focus:after:bg-duller focus:after:border-clear focus:after:shadow-main 
`

const CategoryCard = ({ searchQuery, image }) => {
    return (
        <Link
            to={`/products?category=${encodeURIComponent(searchQuery)}`}
            onClick={() => handleCategory(searchQuery)}
            className={`relative rounded-lg ${afterPseudo}`}
        >
            <img
                src={image}
                alt={searchQuery}
                // className="h-auto object-cover cursor-pointer rounded-3xl transition-all hover:outline hover:outline-4 hover:outline-primaryClear hover:opacity-90"
                className="overflow-hidden h-auto object-cover rounded-lg "
            />
        </Link>
    )
}

const CategoryContainer = () => {
    const dispatch = useDispatch()

    const handleCategory = (category) => {
        dispatch(setPage(1))
        dispatch(setCategory(category))
    }

    const CATEGORIES = [
        { image: category14, searchQuery: 'Linea Maderas' },
        { image: category3, searchQuery: 'Linea Esmaltes' },
        { image: category4, searchQuery: 'Linea Pinturas a la Cal' },
        { image: category5, searchQuery: 'Linea Fondos' },
        { image: category6, searchQuery: 'Linea Entonadores y Tintas' },
        { image: category7, searchQuery: 'Linea Ecologica' },
        { image: category8, searchQuery: 'Linea Esmaltes Industriales' },
        { image: category2, searchQuery: 'Linea Productos Especiales' },
        { image: category10, searchQuery: 'Linea Impermeabilizantes' },
        { image: category11, searchQuery: 'Linea Fijadores - Aditivos -' },
        { image: category9, searchQuery: 'Linea Latex' },
        // { image: category12, searchQuery: "Linea" },
        { image: category13, searchQuery: 'Linea Productos Auxiliares' }
    ]

    return (
        <section className="flex items-center justify-center mt-[50px] w-full bg-bg">
            <div className=" relative z-10 flex flex-col justify-center items-center m-sides max-w-maxSc w-maxIn">
                <div className="text-start">
                    <p className="text-primaryClear">Arte que transforma tus paredes en obras maestras</p>
                    <h2 className="w-full text-[clamp(.75rem,calc(.5rem+3vw),3.5rem)]">Descubra todas nuestras líneas</h2>
                    <p>Nos especializamos en ofrecer soluciones de pintura excepcionales y de alta calidad para una variedad de aplicaciones, desde paredes interiores hasta proyectos exteriores, madera y techos.</p>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full mt-6">
                    {
                        CATEGORIES.map((category, idx) => {
                            if (idx >= 0 && idx <= 1) {
                                return (
                                    <CategoryCard
                                        key={idx}
                                        searchQuery={category.searchQuery}
                                        image={category.image}
                                    />
                                )
                            }
                        })
                    }
                </div>
                <div className="grid grid-cols-3 gap-6 w-full mt-6">
                    {
                        CATEGORIES.map((category, idx) => {
                            if (idx >= 2 && idx <= 4) {
                                return (
                                    <CategoryCard
                                        key={idx}
                                        searchQuery={category.searchQuery}
                                        image={category.image}
                                    />
                                )
                            }
                        })
                    }
                </div>
                <div className="grid grid-cols-2 gap-6 w-full mt-6">
                    {
                        CATEGORIES.map((category, idx) => {
                            if (idx >= 5 && idx <= 6) {
                                return (
                                    <CategoryCard
                                        key={idx}
                                        searchQuery={category.searchQuery}
                                        image={category.image}
                                    />
                                )
                            }
                        })
                    }
                </div>
                <div></div>
                <div className="grid grid-cols-3 gap-6 w-full mt-6">
                    {
                        CATEGORIES.map((category, idx) => {
                            if (idx >= 7 && idx <= 9) {
                                return (
                                    <CategoryCard
                                        key={idx}
                                        searchQuery={category.searchQuery}
                                        image={category.image}
                                    />
                                )
                            }
                        })
                    }
                </div>
                <div className="grid grid-cols-2 gap-6 w-full mt-6">
                    {
                        CATEGORIES.map((category, idx) => {
                            if (idx >= 10 && idx <= 11) {
                                return (
                                    <CategoryCard
                                        key={idx}
                                        searchQuery={category.searchQuery}
                                        image={category.image}
                                    />
                                )
                            }
                        })
                    }
                </div>
                {/* <Link
            to={`/products?category=${encodeURIComponent(
            'Linea Bases Tintometricas'
            )}`}
            onClick={() => handleCategory('Linea Latex')}
        >
            <img
            src={category9}
            alt="category12"
            className="h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
            />
        </Link> */}
            </div>
        </section>
    )
}

export default CategoryContainer

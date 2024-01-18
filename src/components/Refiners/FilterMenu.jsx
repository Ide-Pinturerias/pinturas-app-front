import { useEffect, useRef } from "react"
import { XLarge } from "../SVG"

function FilterMenu({ isFilterOpen, setIsFilterOpen, categories, highPrice, lowPrice, filterCategory, filterByCategory, filterByPrice, clearFilters }) {


    // Detectar click fuera del menú.
    const filterMenuRef = useRef(null)
    const handleOutsideClick1 = (event) => {
        if (isFilterOpen && filterMenuRef.current && !filterMenuRef.current.contains(event.target)) {
            setIsFilterOpen(false)
        };
    }


    // LIFE CYCLES:
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick1)
        return () => {
            document.removeEventListener('click', handleOutsideClick1)
        }
    }, [])


    // COMPONENT:
    return (
        <aside
            ref={filterMenuRef}
            className="flex flex-col w-[30%] h-full mr-auto p-6 bg-bgFocus rounded-r-[2rem]"
        >
            <div className="flex justify-between items-center font-bold uppercase">
                <h2>Filtros</h2>
                <div
                    className="cursor-pointer"
                    onClick={() => setIsFilterOpen(false)}
                >
                    <XLarge />
                </div>
            </div>
            {/*       FILTER BOX       */}
            <div className="overflow-y-auto overflow-x-hidden mt-5 mb-7">
                <div className="mb-4">
                    {/*       FILTER CATEGORY       */}
                    <h3 className="font-bold uppercase mb-2">
                        Categorías
                    </h3>
                    <div className="flex flex-col gap-1">
                        {
                            categories.map((category, index) => (
                                <span
                                    key={index}
                                    onClick={() => filterByCategory(category)}
                                    className={`text-sm ${filterCategory === category ? 'text-primaryClear cursor-default' : 'hover:text-primaryClear cursor-pointer'}`}
                                >
                                    {category}
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div>
                    {/*       FILTER PRICE       */}
                    <h3 className="font-semibold uppercase mb-2">
                        Precio
                    </h3>
                    <div className="flex flex-col gap-1">
                        <span
                            className={`text-sm ${!lowPrice && highPrice === 10000 ? 'text-primaryClear cursor-default' : 'hover:text-primaryClear cursor-pointer'}`}
                            onClick={() => filterByPrice('Hasta $10000')}
                        >
                            Hasta $10.000
                        </span>
                        <span
                            className={`text-sm ${lowPrice === 10000 && highPrice === 20000 ? 'text-primaryClear cursor-default' : 'hover:text-primaryClear cursor-pointer'}`}
                            onClick={() => filterByPrice('$10000 a $20000')}
                        >
                            $10.000 a $20.000
                        </span>
                        <span
                            className={`text-sm ${lowPrice === 20000 && highPrice === '' ? 'text-primaryClear cursor-default' : 'hover:text-primaryClear cursor-pointer'}`}
                            onClick={() => filterByPrice('Mas de $20000')}
                        >
                            Más de $20.000
                        </span>
                    </div>
                </div>
            </div>
            {/*       BUTTONS       */}
            <div className="flex flex-col items-center gap-2">
                <button
                    className="w-[80%] p-4 bg-primaryClear rounded-[2rem] text-white text-sm font-bold uppercase"
                    onClick={() => setIsFilterOpen(false)}
                >
                    Mostrar resultados
                </button>
                <button
                    className="w-[80%] p-4 box-border border text-primaryClear border-primaryClear rounded-[2rem] text-sm font-bold uppercase"
                    onClick={() => clearFilters()}
                >
                    Limpiar filtros
                </button>
            </div>
        </aside>
    )
}

export default FilterMenu
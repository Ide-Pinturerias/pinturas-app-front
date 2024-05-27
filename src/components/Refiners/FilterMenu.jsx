import { useEffect, useRef } from 'react'
import { XLarge } from '@svg'
import { Button } from '@components/Controls/Buttons'

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
    }, [isFilterOpen])

    // COMPONENT:
    return (
        <aside
            ref={filterMenuRef}
            className={`absolute left-0 bottom-0 flex flex-col w-full xs:w-[30%] xs:min-w-[400px] h-[90%] xs:h-full mr-auto p-6 bg-bgFocus rounded-t-[2rem] xs:rounded-tl-none xs:rounded-r-[2rem] transition-all ease-linear duration-200 ${isFilterOpen ? "translate-y-0 xs:-translate-x-0 opacity-100 visible" : "translate-y-6 xs:-translate-x-6 opacity-0 invisible"} xs:translate-y-0 `}
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
                                    className={`text-sm ${filterCategory === category ? 'text-primaryClear underline cursor-default' : 'hover:text-primaryClear cursor-pointer'}`}
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
                            className={`text-sm ${!lowPrice && highPrice === 10000 ? 'text-primaryClear underline cursor-default' : 'hover:text-primaryClear cursor-pointer'}`}
                            onClick={() => filterByPrice('Hasta $10000')}
                        >
                            Hasta $10.000
                        </span>
                        <span
                            className={`text-sm ${lowPrice === 10000 && highPrice === 20000 ? 'text-primaryClear underline cursor-default' : 'hover:text-primaryClear cursor-pointer'}`}
                            onClick={() => filterByPrice('$10000 a $20000')}
                        >
                            $10.000 a $20.000
                        </span>
                        <span
                            className={`text-sm ${lowPrice === 20000 && highPrice === '' ? 'text-primaryClear underline cursor-default' : 'hover:text-primaryClear cursor-pointer'}`}
                            onClick={() => filterByPrice('Mas de $20000')}
                        >
                            Más de $20.000
                        </span>
                    </div>
                </div>
            </div>
            {/*       BUTTONS       */}
            <div className="flex flex-col items-center gap-2">
                <Button variant="primary" onClick={() => setIsFilterOpen(false)} className="w-[80%]">
                    Mostrar resultados
                </Button>
                <Button variant="secondary" onClick={() => clearFilters()} className="w-[80%]">
                    Limpiar filtros
                </Button>
            </div>
        </aside>
    )
}

export default FilterMenu

import { useEffect, useRef } from "react"
import { XLarge } from "../SVG"

function FilterMenu({ isModalOpen, setIsModalOpen, categories, high, low, filterCategory, filterByCategory, filterByPrice }) {


    // Detectar click fuera del menú.
    const filterMenuRef = useRef(null)
    const handleOutsideClick1 = (event) => {
        if (isModalOpen && filterMenuRef.current && !filterMenuRef.current.contains(event.target)) {
            setIsModalOpen(false)
        };
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick1)
        return () => {
            document.removeEventListener('click', handleOutsideClick1)
        }
    }, [])

    return (
        <aside
            ref={filterMenuRef}
            className="flex flex-col w-[30%] h-full p-6 bg-complementaryWhite rounded-r-[2rem]"
        >
            <div className="flex justify-between items-center uppercase">
                <span>Filtros</span>
                <XLarge />
            </div>
            <div className="overflow-y-auto overflow-x-hidden">
                <div className="mb-5">
                    {/*       FILTER CATEGORY      */}
                    <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
                        Categorías
                    </h2>
                    <div className="text-lg flex flex-col">
                        {categories.map((category, index) => (
                            <h3
                                key={index}
                                rel="noopener noreferrer"
                                onClick={() => filterByCategory(category)}
                                className={`mt-1 no-underline text-sm ${filterCategory === category ? 'text-indigo-900' : 'text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out'} m-0`}
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
                            className={`mt-1 no-underline text-sm ${!low && high === 10000 ? 'text-indigo-900' : 'text-gray-400  hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out'} m-0`}
                            onClick={() => filterByPrice('Hasta $10000')}
                        >
                            Hasta $10.000
                        </h3>
                    </div>
                    <div className="text-lg flex flex-col">
                        <h3
                            className={`mt-1 no-underline text-sm ${low === 10000 && high === 20000 ? 'text-indigo-900' : 'text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out'} m-0`}
                            onClick={() => filterByPrice('$10000 a $20000')}
                        >
                            $10.000 a $20.000
                        </h3>
                    </div>
                    <div className="text-lg flex flex-col">
                        <h3
                            className={`mt-1 no-underline text-sm ${low === 20000 && high === '' ? 'text-indigo-900' : 'text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out'} m-0`}
                            onClick={() => filterByPrice('Mas de $20000')}
                        >
                            Más de $20.000
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <button className="w-[80%] p-4 bg-orange rounded-[2rem] text-white text-sm font-bold uppercase">Mostrar resultados</button>
                <button className="w-[80%] p-4 box-border border text-orange border-orange rounded-[2rem] text-sm font-bold uppercase">Limpiar filtros</button>
            </div>
        </aside>
    )
}

export default FilterMenu
import { useEffect, useRef } from "react"

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
            className="flex flex-col gap-3 w-[30%] h-full bg-complementaryWhite rounded-r-[2rem]">
            <div className="h-10 flex gap-1 mb-3">
                {/*          CLEAR FILTERS        */}
                {filterCategory && (
                    <div className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1">
                        {filterCategory}
                        <button onClick={() => filterByCategory('')}>X</button>
                    </div>
                )}
                {high === 0 && low !== 0 && low && (
                    <p className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1">
                        Desde ${low}
                        <button onClick={() => filterByPrice('no price')}>
                            X
                        </button>
                    </p>
                )}
                {low === 0 && high !== 0 && high && (
                    <p className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1">
                        Hasta ${high}
                        <button onClick={() => filterByPrice('no price')}>
                            X
                        </button>
                    </p>
                )}
                {low !== 0 && high !== 0 && high && low && (
                    <p className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1">
                        ${low} hasta ${high}
                        <button onClick={() => filterByPrice('no price')}>
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
                            onClick={() => filterByCategory(category)}
                            className={`mt-1 no-underline text-sm ${filterCategory === category ? 'text-indigo-900' : 'text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'} m-0`}
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
                        className={`mt-1 no-underline text-sm ${!low && high === 10000 ? 'text-indigo-900' : 'text-gray-400  hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'} m-0`}
                        onClick={() => filterByPrice('Hasta $10000')}
                    >
                        Hasta $10.000
                    </h3>
                </div>
                <div className="text-lg flex flex-col">
                    <h3
                        className={`mt-1 no-underline text-sm ${low === 10000 && high === 20000 ? 'text-indigo-900' : 'text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'} m-0`}
                        onClick={() => filterByPrice('$10000 a $20000')}
                    >
                        $10.000 a $20.000
                    </h3>
                </div>
                <div className="text-lg flex flex-col">
                    <h3
                        className={`mt-1 no-underline text-sm ${low === 20000 && high === '' ? 'text-indigo-900' : 'text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'} m-0`}
                        onClick={() => filterByPrice('Mas de $20000')}
                    >
                        Más de $20.000
                    </h3>
                </div>
            </div>
        </aside>
    )
}

export default FilterMenu
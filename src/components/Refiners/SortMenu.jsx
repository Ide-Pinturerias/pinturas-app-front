import { useEffect, useRef } from 'react'
import { XLarge } from '@svg'
import { Button } from '@components/Controls/Buttons'

function SortMenu({ isSortOpen, setIsSortOpen, sortBy, orderBy, sortByClauseAndDirection }) {
    // Detectar click fuera del menú.
    const sortMenuRef = useRef(null)
    const handleOutsideClick1 = (event) => {
        if (isSortOpen && sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
            setIsSortOpen(false)
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
            ref={sortMenuRef}
            className="flex flex-col ml-auto w-[30%] h-full p-6 bg-bgFocus rounded-l-[2rem]"
        >
            <div className="flex justify-between items-center font-bold uppercase">
                <h2>Organizamiento</h2>
                <div
                    className="cursor-pointer"
                    onClick={() => setIsSortOpen(false)}
                >
                    <XLarge />
                </div>
            </div>
            {/*       SORT BOX       */}
            <div className="overflow-y-auto overflow-x-hidden mt-5 mb-7">
                <div className="mb-4">
                    {/*       SORT RATING       */}
                    <h3
                        className="font-semibold uppercase mb-2"
                        onClick={() => sortByClauseAndDirection('rating', 'ASC')}
                    >
                        Los más puntuados
                    </h3>
                    <div className="flex flex-col gap-1">
                        {/* <span
                            className={`text-sm hover:text-primaryClear cursor-pointer`}
                            onClick={() => sortByClauseAndDirection("rating", "ASC")}
                        >
                            Los más puntuados
                        </span> */}
                    </div>
                </div>
                <div className="mb-4">
                    {/*       SORT NAME       */}
                    <h3 className="font-bold uppercase mb-2">
                        Nombre
                    </h3>
                    <div className="flex flex-col gap-1">
                        <span
                            className={`text-sm ${sortBy === 'name' && orderBy === 'ASC' ? 'text-primaryClear' : ''} hover:text-primaryClear cursor-pointer`}
                            onClick={() => sortByClauseAndDirection('name', 'ASC')}
                        >
                            Ascendente (A-Z)
                        </span>
                        <span
                            className={`text-sm ${sortBy === 'name' && orderBy === 'DESC' ? 'text-primaryClear' : ''} hover:text-primaryClear cursor-pointer`}
                            onClick={() => sortByClauseAndDirection('name', 'DESC')}
                        >
                            Descendente (Z-A)
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    {/*       SORT PRICE       */}
                    <h3 className="font-semibold uppercase mb-2">
                        Precio
                    </h3>
                    <div className="flex flex-col gap-1">
                        <span
                            className={`text-sm ${sortBy === 'price' && orderBy === 'ASC' ? 'text-primaryClear' : ''} hover:text-primaryClear cursor-pointer`}
                            onClick={() => sortByClauseAndDirection('price', 'ASC')}
                        >
                            Menor a mayor
                        </span>
                        <span
                            className={`text-sm ${sortBy === 'price' && orderBy === 'DESC' ? 'text-primaryClear' : ''} hover:text-primaryClear cursor-pointer`}
                            onClick={() => sortByClauseAndDirection('price', 'DESC')}
                        >
                            Mayor a menor
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    {/*       SORT STOCK       */}
                    <h3 className="font-semibold uppercase mb-2">
                        Disponibilidad
                    </h3>
                    <div className="flex flex-col gap-1">
                        <span
                            className={`text-sm ${sortBy === 'stock' && orderBy === 'ASC' ? 'text-primaryClear' : ''} hover:text-primaryClear cursor-pointer`}
                            onClick={() => sortByClauseAndDirection('stock', 'ASC')}
                        >
                            Menor a mayor
                        </span>
                        <span
                            className={`text-sm ${sortBy === 'stock' && orderBy === 'DESC' ? 'text-primaryClear' : ''} hover:text-primaryClear cursor-pointer`}
                            onClick={() => sortByClauseAndDirection('stock', 'DESC')}
                        >
                            Mayor a menor
                        </span>
                    </div>
                </div>
            </div>
            {/*       BUTTONS       */}
            <div className="flex flex-col items-center gap-2">
                <Button variant='primary' onClick={() => setIsSortOpen(false)} className='w-[80%]'>
                    Mostrar resultados
                </Button>
                <Button variant='secondary' className='w-[80%]'>
                    Mostrar los más vendidos
                </Button>
            </div>
        </aside>
    )
}

export default SortMenu

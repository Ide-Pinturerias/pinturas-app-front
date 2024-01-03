import { useEffect, useRef } from "react"
import { XLarge } from "../SVG"

function SortMenu({ isSortOpen, setIsSortOpen }) {


    // Detectar click fuera del menú.
    const sortMenuRef = useRef(null)
    const handleOutsideClick1 = (event) => {
        if (isSortOpen && sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
            setIsSortOpen(false)
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
            ref={sortMenuRef}
            className="flex flex-col ml-auto w-[30%] h-full p-6 bg-complementaryWhite rounded-l-[2rem]"
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
                    {/*       SORT NAME       */}
                    <h3 className="font-bold uppercase mb-2">
                        Nombre
                    </h3>
                    <div className="flex flex-col gap-1">
                        <span className={`text-sm text-orange cursor-default' : 'hover:text-orange cursor-pointer`}>
                            Ascendente (A-Z)
                        </span>
                        <span className={`text-sm hover:text-orange cursor-pointer`}>
                            Descendente (Z-A)
                        </span>
                    </div>
                </div>
                <div>
                    {/*       SORT PRICE       */}
                    <h3 className="font-semibold uppercase mb-2">
                        Precio
                    </h3>
                    <div className="flex flex-col gap-1">
                        <span className={`text-sm hover:text-orange cursor-pointer`}>
                            Menor a mayor
                        </span>
                        <span className={`text-sm hover:text-orange cursor-pointer`}>
                            Mayor a menor
                        </span>
                    </div>
                </div>
            </div>
            {/*       BUTTONS       */}
            <div className="flex flex-col items-center gap-2">
                <button
                    className="w-[80%] p-4 bg-orange rounded-[2rem] text-white text-sm font-bold uppercase"
                    onClick={() => setIsSortOpen(false)}
                >
                    Mostrar resultados
                </button>
                <button className="w-[80%] p-4 box-border border text-orange border-orange rounded-[2rem] text-sm font-bold uppercase">
                    Mostrar los más vendidos
                </button>
            </div>
        </aside>
    )
}

export default SortMenu
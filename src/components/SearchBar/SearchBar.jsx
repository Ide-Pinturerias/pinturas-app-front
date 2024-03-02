import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productByName } from '@redux/actions/Products/productByName'
import { getAllProductsPaginated } from '@redux/actions/Products/getAllProductsPaginated'
import { setPage } from '@redux/actions/pagination/setPage'

import { XLarge, ArrowLeft } from '@svg'

function SearchBar ({ toggleSearch }) {
  const thisPage = useSelector((state) => state.thisPage)
  const filterCategory = useSelector((state) => state.filterCategory)
  const { highPrice, lowPrice } = useSelector((state) => state.price)

  const [search, setSearch] = useState('')

  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setPage(1))
    setSearch(event.target.value)

    event.target.value.length
      ? dispatch(productByName(event.target.value, thisPage, filterCategory, lowPrice, highPrice))
      : dispatch(getAllProductsPaginated())
  }

  const clearSearh = () => {
    setSearch('')
  }

  const linkStl = 'flex items-center gap-2 py-[.5rem] px-[1em] bg-transparent rounded-[8px] capitalize cursor-pointer transition-colors hover:text-primaryVisible hover:fill-primaryVisible hover:bg-primaryClear'

  return (
        <div className="flex justify-center items-center size-full">
            <form className="flex justify-center items-center flex-1 h-full">
                <div className="relative flex flex-1 h-[80%] ml-[.4em]">
                    <input
                        type="search"
                        placeholder="Buscar en la tienda"
                        className="relative flex-1 size-full py-[0.2em] px-[1em] box-border border-[1.75px] border-transparent rounded-[12px] bg-inherit transition-all text-[clamp(0.75rem,calc(.8vw+0.25rem),3rem)] hover:border-duller outline-0 focus:border-primaryClear"
                        value={search}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        className={`${linkStl} absolute top-1/2 -translate-y-1/2 right-[.3em]`}
                        onClick={clearSearh}
                    >
                        <XLarge size={'1rem'} />
                    </button>
                </div>
                <button
                    type="submit"
                    className={`${linkStl} mx-[.5em]`}
                >
                    Buscar
                </button>
            </form>
            <button
                className={`${linkStl} mr-[.5em]`}
                onClick={toggleSearch}
            >
                Volver
                <ArrowLeft size={'1rem'} />
            </button>
        </div>
  )
}

export default SearchBar

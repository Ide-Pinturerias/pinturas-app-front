import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productByName } from '@redux/actions/Products/productByName'
import { getAllProductsPaginated } from '@redux/actions/Products/getAllProductsPaginated'
import { setPage } from '@redux/actions/Page/setPage'

import { Magnifier } from '../SVG'

function SearchBar () {
  const thisPage = useSelector((state) => state.thisPage)
  const filterCategory = useSelector((state) => state.filterCategory)
  const { highPrice, lowPrice } = useSelector((state) => state.price)

  const [search, setSearch] = useState('')
  const [magnifierFocus, setMagnifierFocus] = useState(false)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setPage(1))
    setSearch(event.target.value)

    event.target.value.length
      ? dispatch(productByName(event.target.value, thisPage, filterCategory, lowPrice, highPrice))
      : dispatch(getAllProductsPaginated())
  }

  return (
        <div className="flex justify-center items-center gap-2 w-[40%]">
            <input
                type="search"
                placeholder="Buscar en la tienda"
                className="w-[80%] py-[0.2rem] px-4 box-border border-[1.75px] border-transparent rounded-full bg-complementaryWhite transition-all text-[clamp(0.75rem,calc(.8vw+0.25rem),3rem)] hover:border-focusedWhite outline-0 focus:border-orange"
                value={search}
                onChange={handleChange}
                onFocus={() => setMagnifierFocus(true)}
                onBlur={() => setMagnifierFocus(false)}
            />
            <button
                type="submit"
                onFocus={() => setMagnifierFocus(true)}
                onBlur={() => setMagnifierFocus(false)}
            >
                <div className={`h-4 w-4 fill-black hover:fill-orange ${magnifierFocus ? 'fill-orange' : ''}`}>
                    <Magnifier />
                </div>
            </button>
        </div>
  )
}

export default SearchBar

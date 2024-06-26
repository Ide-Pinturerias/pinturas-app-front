import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productByName } from '@redux/actions/Products/productByName';
import { getAllProductsPaginated } from '@redux/actions/Products/getAllProductsPaginated';
import { setPage } from '@redux/actions/pagination/setPage';
import { XLarge } from '@svg';

export const SearchBar = ({ toggleSearch }) => {
  const thisPage = useSelector((state) => state.thisPage);
  const filterCategory = useSelector((state) => state.filterCategory);
  const { highPrice, lowPrice } = useSelector((state) => state.price);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setPage(1));
    setSearch(event.target.value);
    event.target.value.length
      ? dispatch(productByName(event.target.value, thisPage, filterCategory, lowPrice, highPrice))
      : dispatch(getAllProductsPaginated());
  };

  const clearSearch = () => {
    dispatch(setPage(1));
    setSearch('');
    dispatch(getAllProductsPaginated());
  };

  const linkStl =
    'flex items-center gap-2 py-[.3rem] px-[1em] bg-bg rounded-[8px] capitalize cursor-pointer transition-colors hover:text-primaryVisible hover:fill-primaryVisible hover:bg-primaryClear';

  return (
    <div className="flex justify-center items-center order-1 xs:order-2 w-full max-w-[600px] mx-auto">
      <form className="flex justify-center items-center w-full">
        <div className="relative flex w-full h-[80%] ml-[.4m] mb-4 xs:mb-0">
          <input
            type="search"
            placeholder="Buscar en la tienda"
            className="relative flex-1 w-full py-[0.2em] px-[1em] box-border border-[1.75px] border-duller rounded-[12px] bg-inherit transition-all text-[clamp(16px,calc(.8vw+0.25rem),1.2rem)] lg:border-transparent hover:border-duller outline-0 focus:border-primaryClear"
            value={search}
            onChange={handleChange}
          />
          <button
            type="button"
            className={`${linkStl} absolute top-1/2 -translate-y-1/2 right-[.3em]`}
            onClick={clearSearch}
            aria-label='Limpiar búsqueda'
          >
            <XLarge size={'1rem'} />
          </button>
        </div>
      </form>
    </div>
  );
};

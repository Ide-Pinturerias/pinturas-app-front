import { useState } from 'react';
import { NavLink } from 'react-router-dom'

import { BookmarkOutlined } from '@mui/icons-material';

import { formatNumberWithDots } from '../../scripts/formatNumberWithDots';

function CardRegular({ id, name, category, color, image, brand, price }) {

    // LOCAL STATES:
    const [isFav, setIsFav] = useState(false);

    // STYLES:
    const afterPseudo = `
        after:content-[""] after:absolute after:opacity-0 after:-inset-2 
        after:rounded-lg after:rounded-b-3xl after:shadow-main after:bg-bgFocus 
        after:border after:border-hightlight 
        after:transition-focus after:ease-linear after:duration-100 

        hover:after:opacity-100
        focus:after:opacity-100

        focus:after:outline focus:after:outline-focus focus:after:outline-offset-focus 
        focus:after:bg-duller focus:after:border-clear focus:after:shadow-main
        after:mix-blend-multiply

        after:pointer-events-none
    `
    const buttonMain = `transition-focus ease-linear duration-100 hover:bg-primaryLight hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-primaryDark active:scale-[.97]`
    const buttonFav = `transition-all ease-linear duration-100 hover:stroke-primaryLight active:text-primaryDark active:scale-[.97]`
    const tag = `w-fit h-fit flex items-center justify-center box-border px-[.5em] py-[.18em] border-[1.5px] rounded-[15px] border-primaryClear text-[.65rem] text-primaryClear whitespace-nowrap`

    // FUNCTIONS:
    const preventRedirection = (event) => {
        event.preventDefault()
        event.stopPropagation()
    }

    const addToFavourites = (event) => {
        preventRedirection(event)
        setIsFav((prev) => !prev)
    }

    // COMPONENT:
    return (
        <NavLink
            to={`/products/${id}`}
            className={`relative ${afterPseudo} flex flex-col items-center justify-between min-w-full min-h-full outline-clear outline -outline-offset-1 outline-1 bg-bg rounded-lg rounded-b-3xl text-clear transition-all cursor-pointer`}
        >
            {/* IMAGE */}
            <img
                src={image}
                alt={name}
                className="w-full aspect-square object-fit mx-auto overflow-hidden rounded-t-lg"
            />
            {/* INFO */}
            <div className="p-4">
                {/* TAGS: CATEGORY, COLOUR */}
                <div className='flex flex-wrap items-center gap-2 mb-1'>
                    <p className={`${tag}`}>{category}</p>
                    {
                        color !== 'No aplica' ? (
                            <p className={`${tag}`}>{color}</p>
                        ) : null
                    }
                </div>
                {/* NAME & BOOKMARK */}
                <div className='text-xl flex justify-between gap-2'>
                    <p className="m-0 white">{name}</p>
                    <button
                        className='self-start rounded-sm focus:outline focus:outline-focus focus:-outline-offset-[.5px]'
                        onClick={addToFavourites}
                    >
                        <div className={`rounded-sm ${buttonFav} ${isFav ? 'text-primaryClear stroke-primaryClear' : 'text-bg stroke-clear'}`}>
                            <BookmarkOutlined style={{ width: '1.7rem', height: '1.7rem' }} />
                        </div>
                    </button>
                </div>
                {/* BRAND */}
                <p className='font-bold'>{brand}</p>
                {/* PRICE */}
                <strong className="text-[clamp(.5rem,calc(.75rem+1vw),3rem)]">$ {formatNumberWithDots(price)}</strong>
            </div>
            {/* ADD TO CART */}
            <div className="flex justify-center w-full px-4 pb-4" onClick={preventRedirection}>
                <button className={`p-4 bg-primaryClear rounded-3xl text-sm font-bold text-primaryVisible ${buttonMain}`}>AGREGAR AL CARRO</button>
            </div>
        </NavLink >
    )
};

export default CardRegular

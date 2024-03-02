import { useState } from 'react'
import { Link } from 'react-router-dom'

import { formatNumberWithDots } from '@/scripts/formatNumberWithDots'

import { BookmarkOutlined } from '@mui/icons-material'
import { ButtonPrimary } from '@components/Controls/Buttons';
import { afterPseudo } from '../../styles.js';


function CardRegular ({ id, name, category, color, image, brand, price }) {
  // LOCAL STATES:
  const [isFav, setIsFav] = useState(false)

  // STYLES:
  const buttonFav = 'transition-all ease-linear duration-100 hover:stroke-primaryLight active:text-primaryDark active:scale-[.97]'
  const tag = 'w-fit h-fit flex items-center justify-center box-border px-[.5em] py-[.18em] border-[1.5px] rounded-[15px] border-primaryClear text-[.65rem] text-primaryClear whitespace-nowrap'

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
        <Link
            to={`/products/${id}`}
            className={`relative ${afterPseudo} flex flex-col items-center justify-between min-w-full min-h-full bg-bg rounded-lg text-clear transition-all cursor-pointer`}
        >
            {/* IMAGE */}
            <img
                src={image}
                alt={name}
                className="w-full aspect-square object-cover mx-auto overflow-hidden rounded-lg"
            />
            {/* INFO */}
            <div className="py-4">
                {/* TAGS: CATEGORY, COLOUR */}
                <div className='flex flex-wrap items-center gap-2 mb-1'>
                    <p className={`${tag}`}>{category}</p>
                    {
                        color !== 'No aplica'
                          ? (
                            <p className={`${tag}`}>{color}</p>
                            )
                          : null
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
                <ButtonPrimary>Agregar al carro</ButtonPrimary>
            </div>
        </Link >
  )
};

export default CardRegular

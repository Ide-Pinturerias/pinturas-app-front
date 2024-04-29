import { Link } from 'react-router-dom'
import { formatNumberWithDots } from '@/scripts/formatNumberWithDots'
import { afterPseudo } from '@styles';


function CardRegular ({ id, name, category, color, image, brand, price }) {

  // STYLES:
  const tag = 'w-fit h-fit flex items-center justify-center box-border px-[.5em] py-[.18em] border-[1.5px] rounded-[15px] border-primaryClear text-[.65rem] text-primaryClear whitespace-nowrap'


  // COMPONENT:
  // ...
return (
    <Link
      to={`/products/${id}`}
      className={`relative ${afterPseudo} flex flex-col items-center justify-start bg-bg rounded-lg text-clear transition-all cursor-pointer`}
    >
      {/* IMAGE */}
      <div className="w-full aspect-square overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* INFO */}
      <div className="py-2 px-4 w-full">
        {/* TAGS: CATEGORY, COLOUR */}
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <p className={`${tag}`}>{category}</p>
          {color !== 'No aplica' ? <p className={`${tag}`}>{color}</p> : null}
        </div>
        {/* NAME & BOOKMARK */}
        <div className="text-base md:text-lg flex justify-between gap-2">
          <p className="m-0 whitespace-nowrap overflow-hidden text-ellipsis">{name}</p>
        </div>
        {/* BRAND */}
        <p className="font-bold text-sm md:text-base">{brand}</p>
        {/* PRICE */}
        <strong className="text-sm md:text-base">$ {formatNumberWithDots(price)}</strong>
      </div>
    </Link>
  );
};

export default CardRegular

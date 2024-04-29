import { Link } from 'react-router-dom'
import { formatNumberWithDots } from '@/scripts/formatNumberWithDots'
import { afterPseudo } from '@styles';


function CardRegular ({ id, name, category, color, image, brand, price }) {

  // STYLES:
  const tag = 'w-fit h-fit flex items-center m-1 justify-center box-border px-[.5em] border-[1.5px] rounded-[15px] border-primaryClear text-xs text-primaryClear whitespace-nowrap'


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
      <div className="py-2 w-full">
        {/* TAGS: CATEGORY, COLOUR */}
        <div className="flex flex-wrap items-center -m-1 mb-1">
          <p className={`${tag}`}>{category}</p>
          {color !== 'No aplica' ? <p className={`${tag}`}>{color}</p> : null}
        </div>
        {/* NAME & BOOKMARK */}
        <div className="text-base md:text-lg flex justify-between gap-2">
          <p className="whitespace-nowrap overflow-hidden text-ellipsis text-xl">{name}</p>
        </div>
        {/* BRAND */}
        <p className="text-md font-primary font-bold">{brand}</p>
        {/* PRICE */}
        <strong className="text-lg font-primary font-bold">$ {formatNumberWithDots(price)}</strong>
      </div>
    </Link>
  );
};

export default CardRegular

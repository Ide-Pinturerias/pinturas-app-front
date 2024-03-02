import React from "react";
import { Link } from "react-router-dom";
import { formatNumberWithDots } from "../../scripts/formatNumberWithDots";
import { ButtonSecondary, ButtonDanger } from "@components/Controls/Buttons";

// Grid layout:
const bookmark_list_layout = {
    display: 'grid',
    gridTemplateColumns: '3.8fr 2fr 0.8fr 3fr',
    gap: '2rem',
};

function BookmarkItem({ favorite }) {
    return (
        <li
            className="relative flex items-center w-full p-4"
            style={bookmark_list_layout}
        >
            <div className="flex items-center gap-4 ">
                <img src={favorite.image} className="aspect-square object-cover overflow-hidden size-[80px] rounded-lg" />
                <div className="flex flex-col justify-center">
                    <span className="uppercase font-bold">{favorite.name}</span>
                    <span className="first-letter:capitalize lowercase">{favorite.patent}</span>
                </div>
            </div>
            {
                favorite.stock < 10 ? (
                    favorite.stock === 0
                        ? (
                            <span className="text-secondaryClear">
                                Agotado
                            </span>
                        )
                        : favorite.stock === 1
                            ? (
                                <div className="flex items-center gap-2 w-fit py-[.4em] px-[.85em] rounded-[60px] text-white fill-white bg-secondaryClear">
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="size-[.5em]">
                                        <circle cx="50" cy="50" r="50" />
                                    </svg>
                                    ¡Última unidad!
                                </div>
                            )
                            : (
                                <div className="flex items-center gap-2 w-fit py-[.4em] px-[.85em] rounded-[60px] text-[#4E4E4E] fill-[#4E4E4E] bg-[#FFECB3]">
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="size-[.5em]">
                                        <circle cx="50" cy="50" r="50" />
                                    </svg>
                                    <span>
                                        <strong>{favorite.stock}</strong> en stock
                                    </span>
                                </div>
                            )
                ) : (
                    <div className="flex items-center gap-2 w-fit py-[.4em] px-[.85em] rounded-[60px] text-[#2E7D32] fill-[#2E7D32] bg-[#C9EACE]">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="size-[.5em]">
                            <circle cx="50" cy="50" r="50" />
                        </svg>
                        En stock
                    </div>
                )
            }
            <span className="font-bold">$ {formatNumberWithDots(favorite.price)}</span>
            <div className="flex justify-end gap-4">
                {
                    favorite.stock === 0 ? null : (
                        <ButtonSecondary>Agregar al carro</ButtonSecondary>
                    )
                }
                <ButtonDanger>Quitar</ButtonDanger>
            </div>
        </li>
    )
}

export default function BookmarkList({ favorites }) {

    const hasFavorites = Array.isArray(favorites) && favorites.length > 0;
    const interaction = 'transition-focus ease-linear duration-100 hover:bg-primaryLight hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-primaryDark active:scale-[.97]'

    return (
        <div className="flex flex-col my-[50px] text-[clamp(10px,calc(.25rem+.75vw),1rem)]">
            {
                hasFavorites ? (
                    <>
                        <div style={bookmark_list_layout} className="flex w-full p-4 font-bold text-[1.25rem]">
                            <span>Item</span>
                            <span>Stock</span>
                            <span>Precio</span>
                        </div>
                        <ul>
                            {
                                favorites.map((fav, idx) => (
                                    <BookmarkItem key={idx} favorite={fav} />
                                ))
                            }
                        </ul>
                    </>
                ) : (
                    <>
                        <p className="mb-[25px]">No se encontraron productos guardados.</p>
                        <Link
                            to='/products'
                            className={`w-fit p-4 box-border bg-transparent border border-primaryClear rounded-3xl font-bold uppercase text-primaryClear ${interaction}`}
                        >
                            Continuar comprando
                        </Link>
                    </>
                )
            }
        </div>
    )
}
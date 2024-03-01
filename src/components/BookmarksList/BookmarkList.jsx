import React from "react";
import { Link } from "react-router-dom";

// Grid layout:
const div__bookmark_list_layout = {
    display: 'grid',
    gridTemplateColumns: '35% 20% 15% 30%',
};

function BookmarkItem({ favorite }) {
    return (
        <div
            className="flex items-center w-full"
            style={div__bookmark_list_layout}
        >
            <div className="flex">
                <img src={favorite.image} style={{ width: '80px' }} />
                <div className="flex flex-col">
                    <span>{favorite.name}</span>
                    <span className="first-letter:capitalize lowercase">{favorite.patent}</span>
                </div>
            </div>
            <span>Quedan pocas unidades</span>
            <span>{favorite.price}</span>
            <div className="flex">
                <button>Agregar al carro</button>
                <button>Quitar</button>
            </div>
        </div>
    )
}

export default function BookmarkList({ favorites }) {

    const hasFavorites = Array.isArray(favorites) && favorites.length > 0
    const buttonMain = 'transition-focus ease-linear duration-100 hover:bg-bgFocus hover:shadow-main focus:outline focus:outline-focus focus:outline-offset-focus active:bg-primaryDull active:scale-[.97]'

    return (
        <div className="flex flex-col my-[50px]">
            {
                hasFavorites ? (
                    <>
                        <div style={div__bookmark_list_layout} className="flex w-full">
                            <span>Item</span>
                            <span>Stock</span>
                            <span>Precio</span>
                        </div>
                        {
                            favorites.map((fav) => (
                                <BookmarkItem favorite={fav} />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <p className="mb-[25px]">No se encontraron productos guardados.</p>
                        <Link
                            to='/products'
                            className={`w-fit p-4 box-border bg-transparent border border-primaryClear rounded-3xl text-sm font-bold text-primaryClear ${buttonMain}`}
                        >
                            Continuar comprando
                        </Link>
                    </>
                )
            }
        </div>
    )
}
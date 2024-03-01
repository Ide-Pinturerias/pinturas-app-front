import React, { useEffect } from "react";

// Grid layout:
const div__bookmark_list_layout = {
    display: 'grid',
    gridTemplateColumns: '30% 15% 15% 15% 15% 10%'
};

function BookmarkItem({ favorite }) {
    return (
        <div
            className="flex items-center"
            style={div__bookmark_list_layout}
        >
            <div className="flex">
                <img src={favorite.image} style={{ width: '80px' }} />
                <div className="flex flex-col">
                    <span>{favorite.name}</span>
                    <span>{favorite.package}</span>
                    <span>{favorite.color}</span>
                </div>
            </div>
            <span>{favorite.patent}</span>
            <span>{favorite.category}</span>
            <span>{favorite.stock}</span>
            <span>{favorite.price}</span>
            <button>Agregar al carro</button>
        </div>
    )
}

export default function BookmarkList({ favorites }) {

    return (
        <div className="flex flex-col mb-[50px]">
            <div style={div__bookmark_list_layout} className="flex w-full">
                <span>Item</span>
                <span>Marca</span>
                <span>Categoría</span>
                <span>Stock</span>
                <span>Precio</span>
            </div>
            {
                Array.isArray(favorites) && favorites.length > 0 && favorites.map((fav) => (
                    <BookmarkItem favorite={fav} />
                ))
            }
        </div>
    )
};

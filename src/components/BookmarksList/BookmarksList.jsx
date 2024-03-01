import React, { useEffect } from "react";

function BookmarkItem({ favorite }) {
    return (
        <div className="flex items-center">
            <img src={favorite.image} style={{ width: '80px' }} />
            <span>{favorite.name}</span>
            <span>{favorite.package}</span>
            <span>{favorite.color}</span>
            <span>{favorite.patent}</span>
            <span>{favorite.category}</span>
            <span>{favorite.stock}</span>
            <span>{favorite.price}</span>
        </div>
    )
}

export default function BookmarksList({ favorites }) {

    return (
        <div className="flex flex-col">
            <div className="flex">
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

import React from "react";
import { useSelector } from "react-redux";

function BookmarkItem({ product }) {
    return (
        <div className="flex items-center">
            <img src={product.img} />
            <span>{product.title}</span>
            <span>{product.patent}</span>
            <span>{product.category}</span>
            <span>{product.stock}</span>
            <span>{product.price}</span>
        </div>
    )
}

export default function BookmarksList() {

    const favorites = useSelector((state) => state.allFavorites);

    return (
        <div className="flex flex-col">
            <div className="flex">
                <span>Item</span>
                <span>Marca</span>
                <span>Categoría</span>
                <span>Stock</span>
                <span>Precio</span>
            </div>
        </div>
    )
};

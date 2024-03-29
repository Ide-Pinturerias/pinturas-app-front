import React from "react"
import ProductCart from "@components/Cart/ProductCart"

export default function CartList({ products }) {
    return (
        <ul>
            {
                products.map((product) => (
                    <ProductCart
                        key={product.idProduct}
                        id={product.idProduct}
                        name={product.name}
                        category={product.category}
                        brand={product.patent}
                        size={product.package}
                        color={product.color}
                        quantity={product.quantity}
                        image={product.image}
                        price={product.price}
                        stock={product.stock}
                        subtotal={product.price * product.quantity}
                    />
                ))
            }
        </ul>
    )
}
import React from "react";

const ProductCart = ({id, quantity}) => {
  return (
    <div>
      <h1>{id}</h1>
      <h1>{quantity}</h1>
      {/* <img
        className="w-full h-80 max-w-full object-cover"
        src={image}
        alt={name}
      />
      <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{name}</h1> */}
    </div>
    )
}

export default ProductCart;
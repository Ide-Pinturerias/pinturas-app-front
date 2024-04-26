import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import CardRegular from '../ProductCards/CardRegular'
import LoadingScreen from '../Account/LoadingScreen'

function ProductBox ({ isLoading }) {
  // GLOBAL STATES:
  const products = useSelector((state) => state.allProductsPaginated)

  // LOCAL STATES:
  const [filteredProducts, setFilteredProducts] = useState(products)

  // LIFE CYCLES:
  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

 // ...
return (
  <>
    {(Array.isArray(filteredProducts) && filteredProducts.length > 0) && !isLoading ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-[1920px] px-4 md:px-8">
        {filteredProducts.map((product) => (
          <CardRegular
            key={product.idProduct}
            id={product.idProduct}
            name={product.name}
            category={product.category}
            color={product.color}
            image={product.image}
            brand={product.patent}
            price={product.price}
          />
        ))}
      </div>
    ) : (
      <LoadingScreen isLoading={isLoading} />
    )}
  </>
);
};

export default ProductBox

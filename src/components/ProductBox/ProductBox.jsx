import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import CardRegular from '../ProductCards/CardRegular'

function ProductBox({ isLoading }) {
  // GLOBAL STATES:
  const products = useSelector((state) => state.allProductsPaginated)

  // LOCAL STATES:
  const [filteredProducts, setFilteredProducts] = useState(() => products)

  // LIFE CYCLES:
  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  return (
    <div className="w-full min-h-screen">
      {isLoading ? (
        <LoadingSpinner />
      ) : (Array.isArray(filteredProducts) && filteredProducts.length > 0) ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-8 2xl:gap-12 w-full max-w-[1920px]  px-4 md:px-8">
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
        <div className="flex justify-center items-center">
          <img src='src\img\webp\ProductoNo.webp'></img>
        </div>
      )}
    </div>
  );
};

export default ProductBox;

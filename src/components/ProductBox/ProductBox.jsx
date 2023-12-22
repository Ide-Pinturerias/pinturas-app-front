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
  useEffect(() => {``
    setFilteredProducts(products)
  }, [products])

  return (
    <>
      {
        (Array.isArray(filteredProducts) && filteredProducts.length > 0) && !isLoading
        ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 place-items-center w-[93%] max-w-[1920px] mx-[3.5%]">
            {
              filteredProducts.map((product) => (
                <CardRegular
                  key={product.idProduct}
                  id={product.idProduct}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  package={product.package}
                />
              ))
            }
          </div>
        )
        : (
          <LoadingScreen isLoading={isLoading}/>
        )
      }
    </>
  )
};

export default ProductBox

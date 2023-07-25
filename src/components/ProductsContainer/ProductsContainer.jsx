import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import Paginated from "../Paginated/Paginated";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../../redux/actions/allProducts";
import { getProductFilter } from "../../redux/actions/getProductFilter";
import { setPage } from "../../redux/actions/setPage";
import { setCategory } from "../../redux/actions/filters/setCategory";
import { setLowPrice } from "../../redux/actions/filters/setLowPrice";
import { setHighPrice } from "../../redux/actions/filters/setHighPrice";

const ProductsContainer = () => {
  const dispatch = useDispatch();

  const { products, categories, totalPages, thisPage, filterCategory } = useSelector((state) => state);

  const { high, low } = useSelector((state) => state.price);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategory = (category) => {
    dispatch(setPage(1));
    dispatch(setCategory(category));
  };

  const handlePriceFilter = (priceFilter) => {
    if (priceFilter === "Hasta $10000") {
      dispatch(setPage(thisPage));
      dispatch(setLowPrice(0));
      dispatch(setHighPrice(10000));

    } else if (priceFilter === "$10000 a $20000") {
      dispatch(setPage(thisPage));
      dispatch(setLowPrice(10000));
      dispatch(setHighPrice(20000));

    } else if (priceFilter === "Mas de $20000"){
      dispatch(setPage(thisPage));
      dispatch(setLowPrice(20000));
      dispatch(setHighPrice(0));
      
    } else if (priceFilter === "no price"){
      dispatch(setPage(thisPage));
      dispatch(setLowPrice(0));
      dispatch(setHighPrice(0));

    }
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    if (filterCategory || low || high) {
      dispatch(getProductFilter(page, filterCategory, low, high)).then(() => {
        setIsLoading(false);
      });
    } else {
      dispatch(allProducts(page)).then(() => {
        setIsLoading(false);
      });
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    setIsLoading(true); 
    if (filterCategory || low || high) {
      dispatch(getProductFilter(thisPage, filterCategory, low, high)).then(() => {
        setIsLoading(false);
      });
    } else {
      dispatch(allProducts(thisPage)).then(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, filterCategory, low, high, thisPage]);

  return (
    <div className="flex w-full m-auto justify-center">
      <div>
        <div className="flex justify-center ">
          {/*       SIDE BAR     */}
          <aside                
            className="w-full p-6 sm:w-80 bg-tertiary text-gray-800"
            style={{ borderRadius: "20px" }}>
            <nav className="text-base flex flex-col">
              
              {/* <div className="my-3.5 flex flex-col">
                <select
                  className="my-2 h-11 rounded border-indigo-800 border-solid border-2"
                  name="orderBy"
                  value={filters.orderBy}
                  onChange={handleChangeFilter}
                >
                  <option value="" disabled className="text-gray-400">
                    Ordenar por nombre
                  </option>
                  <option value="asc" className="h-11 bg-tertiary">
                    Ascendente
                  </option>
                  <option value="desc" className="h-11 w-11 bg-tertiary">
                    Descendente
                  </option>
                </select>
              </div> */}
              <div>
                <div className="h-10">
                  { filterCategory && <div> {filterCategory} <button onClick={() => handleCategory("")}>X</button></div> }
                  { (high === 0 && low !== 0 && low) && <div> Desde ${low} <button onClick={() => handlePriceFilter("no price")}>X</button></div> }
                  { (low === 0 && high !== 0 && high ) && <div> Hasta ${high} <button onClick={() => handlePriceFilter("no price")}>X</button></div> }
                  { (low !== 0 && high !== 0 && high && low ) && <div> ${low} hasta ${high} <button onClick={() => handlePriceFilter("no price")}>X</button></div> }

                </div>
                <div className="mb-5">   {/*       FILTER CATEGORY    */}
                  <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
                    Categorias
                  </h2>
                  <div className="text-lg flex flex-col">
                    {categories.map((category, index) => (
                      <h3
                        key={index}
                        rel="noopener noreferrer"
                        onClick={() => handleCategory(category)}
                        className={`mt-1 no-underline text-sm ${
                          filterCategory === category
                            ? "text-indigo-900"
                            : "text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                        } m-0`}>
                        {category}
                      </h3>
                    ))}
                  </div>
                </div>
                 <div className="mb-5">  {/*       FILTER PRICE    */}
                  <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
                    Precio
                  </h2>
                  <div className="text-lg flex flex-col">
                    <h3
                      className={`mt-1 no-underline text-sm ${
                      (!low  && high === 10000) ? "text-indigo-900" : "text-gray-400  hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    } m-0`}
                      onClick={() => handlePriceFilter("Hasta $10000")}
                    >
                      Hasta $10.000
                    </h3>
                  </div>
                  <div className="text-lg flex flex-col">
                    <h3
                      className={`mt-1 no-underline text-sm ${(low === 10000 && high === 20000) ? "text-indigo-900" : "text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    } m-0`}
                      onClick={() => handlePriceFilter("$10000 a $20000")}
                    > 
                      $10.000 a $20.000
                    </h3>
                  </div>
                  <div className="text-lg flex flex-col">
                    <h3
                      className={`mt-1 no-underline text-sm ${(low === 20000 && high === "") ? "text-indigo-900" : "text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    } m-0`}
                      onClick={() => handlePriceFilter("Mas de $20000")}
                    > 
                      Más de $20.000
                    </h3>
                  </div>
                </div>
              </div>
            </nav>
          </aside>
        </div>
      </div>
      {/*     PAGINATED     */}
      <div>
        <div className="w-full flex m-auto flex-col justify-center">
          <div className="flex justify-center">
            <div className="w-11/12 grid grid-cols-3 gap-8">
              {isLoading ? (
                <img src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif" alt="loading" />
              ) : (
                filteredProducts.map((product) => (
                  <Products
                    key={product.idProduct}
                    idProduct={product.idProduct}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    package={product.package}
                  />
                ))
              )}
            </div>
          </div>
          <div className="w-full flex justify-center items-center my-7">
            {!isLoading && (
              <Paginated
                totalPages={totalPages}
                thisPage={thisPage}
                pageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;

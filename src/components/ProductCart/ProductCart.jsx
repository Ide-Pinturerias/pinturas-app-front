import { useEffect, useState } from 'react'
import { deleteProductCart } from '../../redux/actions/Cart/deleteProductCart'
import { useDispatch, useSelector } from 'react-redux'

const ProductCart = ({ id, name, quantity, image, price, stock, subtotal }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user) || null
  const [count, setCount] = useState(quantity)
  let productsLocal = []
  useEffect(() => {
    productsLocal = JSON.parse(window.localStorage.getItem('productsLocal')) || []
  }, [productsLocal])

  return (
        <div className=" py-3 my-5 w-full border-t">
            <div className="">
                <div className="flex flex-row">
                    <div className="w-fit">
                        <img src={image} alt="" className="w-20" />
                    </div>
                    <div className="flex px-5 flex-col w-11/12">
                        <h1 className="text-base text-ms font-semibold">{name}</h1>
                        <div className="flex gap-5">
                            <button className="text-indigo-500 font-medium font-sans text-left flex items-center pb-3" onClick={() => {
                              dispatch(deleteProductCart(user, productsLocal, id))
                            }}>Eliminar</button>
                        </div>
                        <div className="flex justify-between ">
                            <div className="flex items-center justify-center flex-col">
                                <div className="grid grid-cols-3 w-28 h-8 border border-gray-500 rounded">
                                    <button className={`text-2xl ${count === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-100'} `}
                                        disabled={count === 1}>
                                        -
                                    </button>
                                    <h1 className="flex justify-center items-center">{count}</h1>
                                    <button
                                        className={`text-2xl ${count === stock ? 'cursor-not-allowed' : 'hover:bg-gray-100'} `}
                                        disabled={count === stock}
                                        onClick={() => {
                                          if (count < stock) {
                                            setCount(count + 1)
                                          }
                                        }}
                                        >
                                        +
                                    </button>
                                </div>{
                                    stock > 0
                                      ? <h1 className="text-gray-500"> {stock} disponibles </h1>
                                      : <p className="text-red-700 font-semibold"> Producto sin stock </p>}
                            </div>
                            <div className="w-80 flex justify-end items-center">
                                {stock > 0
                                  ? <h1 className="text-xl font-bold text-gray-700">$ {subtotal}</h1>
                                  : <p className="text-red-700 font-semibold"> Producto no disponible </p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductCart

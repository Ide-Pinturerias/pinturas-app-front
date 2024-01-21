import { useEffect, useState } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { productById } from '@redux/actions/Products/productById'
import { getBestSellers } from '@redux/actions/Products/getBestSellers'
import { postFavorites } from '@redux/actions/Favorites/postFavorites'
import { cleanProductDetail } from '@redux/actions/Products/cleanProductDetail'
import { addProductCart } from '@redux/actions/Cart/addProductCart'
import { deleteProductCart } from '@redux/actions/Cart/deleteProductCart'
import Swal from 'sweetalert2'
import { Bookmark, Star, Shop, Phone, ChatEmpty, Plus, Minus } from '@components/SVG'

function Detail () {
  // GLOBAL STATES:
  const loggedUser = useSelector((state) => state.user)
  const product = useSelector((state) => state.detail)

  // CONSTANTS:
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { idProduct } = useParams()
  const productsLocal = JSON.parse(window.localStorage.getItem('productsLocal')) || []

  // LOCAL STATES:
  // Cantidad de productos que se llevan:
  const [numberOfItems, setNumberOfItems] = useState(1)
  // Número de contacto:
  const [showNumber, setShowNumber] = useState(false)
  // Estado de producto en carrito
  const [isInCart, setIsInCart] = useState(false)

  // FUNCTIONS:

  // Saber si el producto ya esta en el carrito
  const isProductInCart = (productsLocal, id) => {
    const found = productsLocal.some(product => product.id === id)
    setIsInCart(found)
    return found
  }
  // Agregar producto a favoritos
  const addFavorite = () => {
    if (Object.keys(loggedUser).length !== 0) {
      const data = {
        idUser: loggedUser.id,
        idProduct
      }

      dispatch(postFavorites(data))
        .then((response) => {
          if (response === 'existe') {
            Swal.fire('Ya exite este producto en favoritos')
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Producto agregado a favoritos',
              timer: 2000,
              showConfirmButton: false
            })
          };
        })
        .catch((error) => {
          console.log('error productCart', error)
        })
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Debes estar logueado para agregar favoritos'
      })
    };
  }

  const onAddProductCart = () => {
    const productToAdd = { id: idProduct, quantity: numberOfItems }
    dispatch(addProductCart(loggedUser.id, productsLocal, productToAdd))
    isProductInCart(productsLocal, idProduct)
    Swal.fire({
      title: 'EXITO!',
      text: 'Producto agregado al carrito. ¿Deseas revisar tu carrito?',
      icon: 'success',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Ir a carrito',
      denyButtonText: 'Seguir comprando'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/cart'
      }
    })
  }
  // Ir a comprar carrito
  const handleBuyNow = () => {
    if (!isInCart) {
      const productToAdd = { id: idProduct, quantity: numberOfItems }
      dispatch(addProductCart(loggedUser.id, productsLocal, productToAdd))
      isProductInCart(productsLocal, idProduct)
    }
    navigate('/cart')
  }

  const onDeleteProductCart = ({ user, id }) => {
    dispatch(deleteProductCart(user, id))
    setIsInCart(false)
    Swal.fire({
      title: 'EXITO!',
      text: 'Producto eliminado del carrito',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  // Formatea el precio del producto como una string e inserta puntos (.) cada 3 dígitos para seguir el formato de precios argentinos.
  function formatNumberWithDots (number) {
    // Convierte el número a una string.
    let numStr = number.toString()

    // Usar un Regex para instertar 3 puntos (.) cada 3 dígitos empezando de la derecha.
    numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    return numStr
  };

  // Controlar el <input> conectado al estado "numberOfItems".
  // "numberOfItems" debe ser un NÚMERO mayor a 0  y menor al stock del producto.
  const handleNumberOfItems = (event) => {
    if (product.stock !== 0) {
      const { value } = event.target
      if (value === '' || (!isNaN(value) && parseInt(value) >= 1 && parseInt(value) <= product.stock)) {
        setNumberOfItems(Number(value))
      };
    }
  }

  // Controlar los botones de "+" y "-" relacionados al estado "numberOfItems".
  // "numberOfItems" debe ser un NÚMERO mayor a 0  y menor al stock del producto.
  const handleNumberChange = (parameter) => {
    if (product.stock !== 0) {
      if (parameter === 'add' && numberOfItems < product.stock) {
        setNumberOfItems((prev) => prev + 1)
      } else if (parameter === 'remove' && numberOfItems > 1) {
        setNumberOfItems((prev) => prev - 1)
      };
    }
  }
  // Se basa en el rating del producto para renderizar las estrellas.
  const renderStars = (value) => {
    const max = 5
    const percentage = Math.round((value / max) * 100)

    return (
      <div className="relative flex items-center gap-1 mr-2 fill-orange">
        {
          Array.from(Array(max).keys()).map((_, idx) => (
            <Star key={idx} />
          ))
        }
        <div className="absolute top-0 right-0 bottom-0 z-10 bg-black mix-blend-color" style={{ width: `${100 - percentage}%` }} />
      </div>
    )
  }

  useEffect(() => {
    dispatch(productById(idProduct))
    dispatch(getBestSellers())
    dispatch(cleanProductDetail())
    isProductInCart(productsLocal, idProduct)
    if (product.stock === 0) {
      setNumberOfItems(0)
    }
  }, [dispatch, idProduct])

  // Setea el elemento <title> del <head> del documento HTML.
  useEffect(() => {
    product.name
      ? (
          document.title = `${product.name}`
        )
      : (
          document.title = 'Ide Pinturerias'
        )
    return () => {
      document.title = 'Ide Pinturerias'
    }
  }, [idProduct])

  // Remove From Cart Button
  const removeFromCartButton = (
    <button className="w-[80%] mb-2 p-4 box-border border text-red-600 border-red-600 rounded-[2rem] text-sm font-bold uppercase"
      title="Ya tienes este producto en el carrito"
      onClick={
        () => onDeleteProductCart({
          user: loggedUser,
          id: idProduct
        })
    }
    >
      Eliminar del carrito
    </button>
  )

  // Add To Cart Button
  const addToCartButton = (
    <button className="w-[80%] mb-2 p-4 box-border border text-orange border-orange rounded-[2rem] text-sm font-bold uppercase"
      title="Agregar al carrito"
      onClick={
        () => onAddProductCart()
      }
    >
      Agregar al carrito
    </button>
  )

  // COMPONENT:
  return (
        <main className="flex flex-col justify-center p-whiteSpaceTop bg-softWhite">
            {
                Object.keys(product).length === 0
                  ? (<img
                        src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif"
                        alt="cargando"
                        className="w-94 h-94 "
                    />)
                  : (<div className="flex flex-col gap-12 max-w-[1920px] w-full px-[3.5%]">
                        {/* BREADCRUMB */}
                        <div className="text-xs">
                            <NavLink to="/" className="mr-4">Home</NavLink>
                            /
                            <NavLink to="/products" className="mx-4">productos</NavLink>
                            /
                            <span className="mx-4">{product.name}</span>
                        </div>
                        {/* END OF BREADCRUMB */}
                        <div className="flex justify-between gap-8 w-full">
                            <section>
                                <img src={product.image} className="w-[300px] rounded-[1rem] font-black select-none" />
                            </section>

                            <section className="flex flex-col border-black w-[calc(100%-300px)]">
                                <div className="flex justify-between">
                                    <div className="flex flex-col mb-4">
                                        {/* CATEGORY LABEL OPTION 1: */}
                                        <a className="w-fit box-border px-[2%] py-[.25%] border-[1.5px] rounded-[15px] border-orange text-sm text-orange tracking-[.25px]">{product.category}</a>
                                        {/* CATEGORY LABEL OPTION 2: */}
                                        {/* <a className="relative z-0 w-fit px-[2%] py-[.25%] before:content-[''] before:-z-10 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:rounded-[15px] before:bg-black text-white text-sm tracking-[2px]">{productMock.category}</a> */}
                                        <h1 className="mt-2 text-3xl font-bold uppercase">{product.name}</h1>
                                        <a className="text-lg">Ver más productos de <u className="text-primary uppercase cursor-pointer">{product.patent}</u></a>
                                    </div>
                                    <button className="flex outline-0 border-none bg-transparent h-fit" onClick={addFavorite}>
                                      <Bookmark />
                                    </button>
                                </div>
                                <div className="flex justify-between">
                                    <div className="w-[60%]">
                                        <div className="flex items-center">
                                            {
                                                renderStars(product.rating)
                                            }
                                            <span className="mr-4 leading-none font-bold">{product.rating}</span>
                                            <span className="text-primary underline cursor-pointer">
                                                {
                                                    product.nroReviews > 0
                                                      ? (
                                                          // "renderizar verdadera cantidad de reseñas"
                                                          product.nroReviews
                                                        )
                                                      : null
                                                }
                                            </span>
                                        </div>
                                        <hr className="my-4 mt-5 border-orange" />
                                        <h2 className="text-lg font-bold uppercase mb-2">Descripción general</h2>
                                        <div className="p-4 bg-complementaryWhite text-black rounded-[1rem]">
                                            <ul className="text-lg">
                                                <li>Tamaño del envase: {product.package}</li>
                                                <li>Color: {product.color}</li>
                                                <li><u className="text-primary cursor-pointer">Ver más</u></li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col justify-between mt-2">
                                            <div className="flex items-center gap-2 w-fit mb-2 p-4 rounded-[1rem] bg-complementaryWhite">
                                                <Shop />
                                                Disponible en tienda
                                            </div>
                                        </div>

                                        <hr className="my-4 border-focusedWhite" />

                                        <h3 className="text-lg font-bold uppercase mb-2">¿Tienes alguna duda?</h3>
                                        <div className="my-2">Estamos para ayudar</div>
                                        <div className="flex gap-2">
                                            <button
                                                className={'flex items-center gap-2 w-fit mb-2 p-4 box-border border border-orange text-orange rounded-[2rem] text-sm font-bold uppercase ' + (showNumber && 'cursor-default select-text')}
                                                onClick={() => showNumber === false && setShowNumber(true)}
                                            >
                                                <Phone />
                                                {
                                                    !showNumber
                                                      ? (
                                                          'Llámanos'
                                                        )
                                                      : (
                                                          '+54 351 306 135'
                                                        )
                                                }
                                            </button>
                                            <button className="flex items-center gap-2 w-fit mb-2 p-4 box-border border border-orange text-orange rounded-[2rem] text-sm font-bold uppercase">
                                                <ChatEmpty />
                                                Chatea
                                            </button>
                                        </div>

                                        <hr className="my-4 border-orange" />
                                    </div>
                                    <div className="flex flex-col items-center w-[40%]">
                                        <div className="mb-8"><strong className="text-5xl">${formatNumberWithDots(product.price)}</strong></div>
                                        <div className="flex mb-4 border border-black rounded-[2rem] text-lg h-fit">
                                            <button className="p-3" onClick={() => handleNumberChange('remove')}><Minus /></button>
                                            <input
                                                value={numberOfItems}
                                                onChange={(e) => handleNumberOfItems(e)}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={4}
                                                step={1}
                                                min={0} max={product.stock}
                                                className="bg-transparent text-center w-14 p-3"
                                            />
                                            <button className="p-3" onClick={() => handleNumberChange('add')}><Plus /></button>
                                        </div>
                                        {
                                            product.stock < 50
                                              ? (
                                                <div className={'mb-4 text-sm ' + (product.stock === 0 && 'text-red-600')}>
                                                    {
                                                        product.stock === 0
                                                          ? (
                                                              'No quedan unidades de este producto'
                                                            )
                                                          : product.stock === 1
                                                            ? (
                                                                '¡Queda solo 1 unidad!'
                                                              )
                                                            : (
                                                            `¡Quedan solo ${product.stock} unidades!`
                                                              )
                                                    }
                                                </div>
                                                )
                                              : null
                                        }
                                        {
                                            product.stock !== 0
                                              ? (
                                                <>
                                                    <button className="w-[80%] mb-2 p-4 bg-orange rounded-[2rem] text-white text-sm font-bold uppercase"
                                                    onClick={handleBuyNow}
                                                    >¡Comprar ahora!</button>
                                                    {
                                                        isInCart
                                                          ? removeFromCartButton
                                                          : addToCartButton
                                                    }
                                                </>
                                                )
                                              : (
                                                  null
                                                )
                                        }
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>)
            }
        </main>
  )
};

export default Detail

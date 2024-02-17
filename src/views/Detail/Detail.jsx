import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { productById } from '@redux/actions/Products/productById'
import { getBestSellers } from '@redux/actions/Products/getBestSellers'
// import { setCart } from '@redux/actions/Cart/setCart'
import { postFavorites } from '@redux/actions/Favorites/postFavorites'
import { cleanProductDetail } from '@redux/actions/Products/cleanProductDetail'
// import { useCart } from '@hooks/useCart'

import Swal from 'sweetalert2'
import { Bookmark, Star, Shop, Phone, ChatEmpty, Plus, Minus } from '../../components/SVG'
// import DeleteButton from '@components/DeleteButton/DeleteButton'
// import UpdateButton from '@components/UpdateButton/UpdateButton'
import FeaturedContainer from '@components/FeaturedContainer/FeaturedContainer'

function Detail () {
  // GLOBAL STATES:
  const loggedUser = useSelector((state) => state.user)
  const product = useSelector((state) => state.detail)

  // CONSTANTS:
  const dispatch = useDispatch()
  //   const navigate = useNavigate()
  const { idProduct } = useParams()
  // const cart = useSelector((state) => state.cart);
  //   const { addToCart } = useCart()

  // LOCAL STATES:
  //   const [isValidQuantity, setIsValidQuantity] = useState(true)
  //   const [error, setError] = useState('')
  //   const [added, setAdded] = useState(false)
  //   const [addedBuy, setAddedBuy] = useState(false)
  //   const [addProduct, setAddProduct] = useState({
  //     id: idProduct,
  //     quantity: 1,
  //     name: product.name,
  //     image: product.image,
  //     price: product.price,
  //     stock: product.stock
  //   })
  // Cantidad de productos que se llevan:
  const [numberOfItems, setNumberOfItems] = useState(1)
  // Número de contacto:
  const [showNumber, setShowNumber] = useState(false)
  // DEV MODE:
  // const [productMock, setProductMock] = useState({});

  // FUNCTIONS:
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
            <div className="relative flex items-center gap-1 mr-2 fill-primaryClear">
                {
                    Array.from(Array(max).keys()).map((_, idx) => (
                        <Star key={idx} />
                    ))
                }
                <div className="absolute top-0 right-0 bottom-0 z-10 bg-black mix-blend-color" style={{ width: `${100 - percentage}%` }} />
            </div>
    )
  }

  // LIFE CYCLES:
  //   useEffect(() => {
  //     if (added) {
  //       dispatch(setCart(addProduct))
  //       Swal.fire('Producto agregado al carrito')
  //       console.log('addProduct', addProduct)
  //       setAdded(false)
  //     };
  //     if (addedBuy) {
  //       dispatch(setCart(addProduct))
  //       setAddedBuy(false)
  //       navigate('/cart')
  //     };
  //   }, [added, addedBuy])

  // PRODUCTION:
  useEffect(() => {
    dispatch(productById(idProduct))
    dispatch(getBestSellers())
    dispatch(cleanProductDetail())
    if (product.stock === 0) {
      setNumberOfItems(0)
    }
  }, [dispatch, idProduct])

  // DEV MODE: Solo para evitar peticiones al servidor.
  // useEffect(() => {
  //     // console.log(product);
  //     // localStorage.setItem("productMock", JSON.stringify(product));
  //     const product = localStorage.getItem("productMock");
  //     setProductMock(JSON.parse(product));
  // }, []);

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
  }, [idProduct, product])

  useEffect(() => {
    if (numberOfItems <= 0 || numberOfItems > product.stock) {
      setNumberOfItems(1)
    }
  }, [numberOfItems])

  // COMPONENT:
  return (
        <main className="flex items-center justify-center w-full p-whiteSpaceTop bg-bg">
            {
                Object.keys(product).length === 0
                  ? (<img
                        src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif"
                        alt="Cargando..."
                        className="w-94 h-94 "
                    />)
                  : (<div className="flex flex-col max-w-maxSc w-maxIn m-sides">
                        {/* BREADCRUMB */}
                        <div className="text-xs font-secondary mb-[50px]">
                            <ul className='flex items-center'>
                                <li>
                                    <NavLink to="/" className="mr-4">Home</NavLink>
                                    /
                                </li>
                                <li>
                                    <NavLink to="/products" className="mx-4">productos</NavLink>
                                    /
                                </li>
                                <li>
                                    <span className="mx-4">{product.name}</span>
                                </li>
                            </ul>
                        </div>
                        {/* END OF BREADCRUMB */}
                        <div className="flex justify-between gap-8 w-full mb-[50px]">
                            <section>
                                <img src={product.image} className="w-[300px] rounded-[1rem] font-black select-none" />
                            </section>

                            <section className="flex flex-col border-black w-[calc(100%-300px)]">
                                <div className="flex justify-between">
                                    <div className="flex flex-col mb-4">
                                        {/* CATEGORY LABEL OPTION 1: */}
                                        <a className="w-fit box-border px-[2%] py-[.25%] border-[1.5px] rounded-[15px] border-primaryClear text-sm text-primaryClear tracking-[.25px]">{product.category}</a>
                                        {/* CATEGORY LABEL OPTION 2: */}
                                        {/* <a className="relative z-0 w-fit px-[2%] py-[.25%] before:content-[''] before:-z-10 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:rounded-[15px] before:bg-black text-white text-sm tracking-[2px]">{product.category}</a> */}
                                        <h1 className="mt-2 text-3xl font-bold uppercase">{product.name}</h1>
                                        <p className="text-lg">Ver más productos de <a className="text-accentClear underline uppercase cursor-pointer">{product.patent}</a></p>
                                    </div>
                                    <button className="flex outline-0 border-none bg-transparent h-fit" onClick={addFavorite}>
                                        <Bookmark size={'1rem'} />
                                    </button>
                                </div>
                                <div className="flex justify-between">
                                    <div className="w-[60%]">
                                        <div className="flex items-center">
                                            {
                                                renderStars(product.rating)
                                            }
                                            <span className="mr-4 leading-none font-bold">{product.rating}</span>
                                            <span className="text-accentClear underline cursor-pointer">
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
                                        <hr className="my-4 mt-5 border-duller" />
                                        <h2 className="text-lg font-bold uppercase mb-2">Características</h2>
                                        <div className="p-4 bg-bgFocus text-clear rounded-[1rem]">
                                            <ul className="text-lg">
                                                <li>Tamaño del envase: {product.package}</li>
                                                <li>Color: {product.color}</li>
                                                <li><u className="text-accentClear cursor-pointer">Ver más</u></li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col justify-between mt-2">
                                            <div className="flex items-center gap-2 w-fit mb-2 p-4 rounded-[1rem] bg-bgFocus">
                                                <Shop />
                                                Disponible en tienda
                                            </div>
                                        </div>

                                        <hr className="my-4 border-duller" />

                                        <h2 className="text-lg font-bold uppercase mb-2">¿Tienes alguna duda?</h2>
                                        <div className="my-2">Estamos para ayudar</div>
                                        <div className="flex gap-2">
                                            <button
                                                className={'flex items-center gap-2 w-fit mb-2 p-4 box-border border border-primaryClear text-primaryClear rounded-[2rem] text-sm font-bold uppercase ' + (showNumber && 'cursor-default select-text')}
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
                                            <button className="flex items-center gap-2 w-fit mb-2 p-4 box-border border border-primaryClear text-primaryClear rounded-[2rem] text-sm font-bold uppercase">
                                                <ChatEmpty />
                                                Chatea
                                            </button>
                                        </div>

                                        {/* <hr className="my-4 border-duller" /> */}
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
                                                        <button className="w-[80%] mb-2 p-4 bg-primaryClear rounded-[2rem] text-white text-sm font-bold uppercase">¡Comprar ahora!</button>
                                                        <button className="w-[80%] mb-2 p-4 box-border border text-primaryClear border-primaryClear rounded-[2rem] text-sm font-bold uppercase">Agregar al carro</button>
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
                        <div className="mb-[100px]">
                            <section className='mb-[50px]'>
                                <h2 className='text-lg font-bold uppercase mb-2'>Descripción</h2>
                                <p className='first-letter:capitalize'>{product.description}</p>
                            </section>
                            <section>
                                <h2 className='text-lg font-bold uppercase mb-2'>Productos similares</h2>
                                <FeaturedContainer
                                    bestSellersContainer={false}
                                    similarProductsContainer={true}
                                    similarProductsContainerOptions={{
                                      currentId: product.idProduct,
                                      limit: 4,
                                      category: product.category,
                                      color: product.color
                                    }}
                                />
                            </section>
                        </div>
                    </div>)
            }
        </main>
  )
};

export default Detail

import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { productById } from '@redux/actions/Products/productById'
import { getBestSellers } from '@redux/actions/Products/getBestSellers'
import { cleanProductDetail } from '@redux/actions/Products/cleanProductDetail'
import { addProductCart } from '@redux/actions/Cart/addProductCart'
import { deleteProductCart } from '@redux/actions/Cart/deleteProductCart'
import { postFavorite } from '@redux/actions/Favorites/postFavorite'
import { formatNumberWithDots } from '@scripts/formatNumberWithDots'
import Swal from 'sweetalert2'
import { Bookmark, Star, Shop, Phone, ChatEmpty } from '@svg'
import FeaturedContainer from '@components/FeaturedContainer/FeaturedContainer'
import ProductQuantitySelector from '@components/Controls/ProductQuantitySelector'
import { Button } from '@components/Controls/Buttons.jsx'
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner'

function Detail() {
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
    // Indica si se está actualizando la prop "quantity" del producto (se usa para evitar exceso de peticiones):
    const [isNumberOfItemsUpdating, setIsNumberOfItemsUpdating] = useState(false)
    // Indica si el producto está en "cart" del localStorage:
    const [isInCart, setIsInCart] = useState(false)
    // Número de contacto:
    const [showNumber, setShowNumber] = useState(false)

    // FUNCTIONS:
    // Saber si el producto ya está en el carrito.
    const isProductInCart = (productsLocal, id) => {
        const found = productsLocal.some(product => product.id === id)
        setIsInCart(found)
    }

    // Agregar producto a favoritos.
    const addFavorite = () => {
        if (Object.keys(loggedUser).length !== 0) {
            const data = {
                idUser: loggedUser.id,
                idProduct
            }
            dispatch(postFavorite(data))
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
        }
    }

    // Agregar producto al carro.
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

    // Agregar e ir al carro.
    const handleBuyNow = () => {
        if (!isInCart) {
            const productToAdd = { id: idProduct, quantity: numberOfItems }
            dispatch(addProductCart(loggedUser.id, productsLocal, productToAdd))
            isProductInCart(productsLocal, idProduct)
        }
        navigate('/cart')
    }

    // Eliminar producto del carro.
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

    // Renderizar estrellas basándose en el "rating" del producto.
    const renderStars = (value) => {
        const max = 5
        const percentage = Math.round((value / max) * 100)

        return (
            <div className="relative flex items-center gap-1 mr-2 fill-primaryClear">
                {
                    Array.from(Array(max).keys()).map((_, idx) => <Star key={idx} />)
                }
                <div className="absolute top-0 right-0 bottom-0 z-10 bg-black mix-blend-color" style={{ width: `${100 - percentage}%` }} />
            </div>
        )
    }

    // LIFE CYCLES:
    // Al cargar el componente.
    useEffect(() => {
        // Limpia el estado "detail" al cargar la página.
        dispatch(cleanProductDetail())
        // Envía la ID para recibir los detalles del producto en redux y .
        dispatch(productById(idProduct))
        dispatch(getBestSellers())
        // 
        isProductInCart(productsLocal, idProduct)
        if (product.stock === 0) {
            setNumberOfItems(0)
        }
        return () => {
            // Limpia el estado "detail" en redux al clickear e ir a otro producto, por ejemplo.
            dispatch(cleanProductDetail())
        }
    }, [dispatch, idProduct])

    // Setea el elemento <title> del <head> del documento HTML.
    useEffect(() => {
        product.name
            ? document.title = `${product.name}`
            : document.title = 'Ide Pinturerias'
        return () => {
            document.title = 'Ide Pinturerias'
        }
    }, [idProduct])

    useEffect(() => {
        try {
            const productsLocal = JSON.parse(localStorage.getItem("productsLocal"))
            if (Array.isArray(productsLocal)) {
                const product = productsLocal.find(obj => obj.id.toString() === idProduct.toString());
                setNumberOfItems(product.quantity);
            }
        } catch (error) {
            setNumberOfItems(1);
        }
    }, [])

    // COMPONENT:
    return (
        <main className="flex justify-center w-full min-h-screen p-whiteSpaceTop bg-bg">
            {Object.keys(product).length === 0 ? (
                <LoadingSpinner />
            ) : (
                <div className="flex flex-col max-w-maxSc w-maxIn m-sides">
                    {/* BREADCRUMB */}
                    <div className="text-xs font-secondary mb-[50px]">
                        <ul className="flex flex-wrap items-center">
                            <li>
                                <Link to="/">Home</Link>
                                <span className="mx-4">/</span>
                            </li>
                            <li>
                                <Link to="/products">Productos</Link>
                                <span className="mx-4">/</span>
                            </li>
                            <li>
                                <span>{product.name}</span>
                            </li>
                        </ul>
                    </div>
                    {/* END OF BREADCRUMB */}

                    {/* PRODUCT DETAILS */}
                    <div className="flex flex-col sm:flex-row justify-between gap-8 w-full mb-[50px]">
                        {/* PRODUCT IMAGE */}
                        <section className='w-full sm:w-[250px] xl:w-[300px]'>
                            <img
                                src={product.image}
                                className="w-full rounded-[1rem] font-black select-none"
                            />
                        </section>

                        {/* PRODUCT INFORMATION */}
                        <section className="flex flex-col border-black flex-1">
                            {/* CATEGORY AND FAVORITE BUTTON */}
                            <div className="flex justify-between mb-4">
                                <div className="flex flex-col">
                                    <a className="w-fit box-border px-[2%] py-[.25%] border-[1.5px] rounded-[15px] border-primaryClear text-sm text-primaryClear tracking-[.25px]">
                                        {product.category}
                                    </a>
                                    <h1 className="mt-2 text-2xl font-bold uppercase font-primary">
                                        {product.name}
                                    </h1>
                                    <p className="text-lg">
                                        Ver más productos de{" "}
                                        <a className="text-accentClear underline uppercase cursor-pointer">
                                            {product.patent}
                                        </a>
                                    </p>
                                    <div className="flex items-center mt-2">
                                        {renderStars(product.rating)}
                                        <span className="mr-4 leading-none font-bold">
                                            {product.rating}
                                        </span>
                                        <span className="text-accentClear underline cursor-pointer">
                                            {product.nroReviews > 0 && product.nroReviews}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="flex outline-0 border-none bg-transparent h-fit"
                                    onClick={addFavorite}
                                >
                                    <Bookmark size={"1rem"} />
                                </button>
                            </div>

                            {/* RATING, REVIEWS, AND FEATURES */}
                            <div className="flex flex-col-reverse lg:flex-row justify-between">
                                <div className="w-full lg:w-[60%]">
                                    {/* RATING AND REVIEWS */}
                                    {/* <div className="flex items-center">
                                        {renderStars(product.rating)}
                                        <span className="mr-4 leading-none font-bold">
                                            {product.rating}
                                        </span>
                                        <span className="text-accentClear underline cursor-pointer">
                                            {product.nroReviews > 0 && product.nroReviews}
                                        </span>
                                    </div> */}
                                    <hr className="hidden lg:block mb-4 border-duller" />

                                    {/* PRODUCT FEATURES */}
                                    <h2 className="text-lg font-bold uppercase mb-2 font-primary">
                                        Características
                                    </h2>
                                    <div className="p-4 bg-bgFocus text-clear rounded-[.5rem]">
                                        <ul className="text-lg">
                                            <li>
                                                Tamaño del envase: {product.package}
                                            </li>
                                            <li>Color: {product.color}</li>
                                            {/* <li>
                                                <u className="text-accentClear cursor-pointer">
                                                    Ver más
                                                </u>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-between mt-2">
                                        <div className="flex items-center gap-2 w-fit mb-2 p-4 rounded-[1rem] bg-bgFocus">
                                            <Shop />
                                            Disponible en tienda
                                        </div>
                                    </div>

                                    <hr className="my-4 border-duller" />

                                    {/* CONTACT INFORMATION */}
                                    <h2 className="text-lg font-bold uppercase mb-2 font-primary">
                                        ¿Tienes alguna duda?
                                    </h2>
                                    <div className="my-2">Estamos para ayudar</div>
                                    <div className="flex flex-wrap gap-2">
                                        <Button
                                            variant="secondary"
                                            subVariant="icon"
                                            className={
                                                "gap-2 text-sm " +
                                                (showNumber &&
                                                    "cursor-default select-text transition-none active:bg-bg active:scale-100")
                                            }
                                            onClick={() => showNumber === false && setShowNumber(true)}
                                        >
                                            <Phone />
                                            {!showNumber ? "Llámanos" : "+54 351 306 135"}
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            subVariant="icon"
                                            className="gap-2 text-sm"
                                        >
                                            <ChatEmpty />
                                            Chatea
                                        </Button>
                                    </div>
                                </div>

                                {/* PRODUCT PRICE, QUANTITY CONTROLS, AND BUY BUTTONS */}
                                <div className="flex flex-col md:flex-row md:justify-between items-center w-full lg:flex-col lg:w-[40%] lg:items-start lg:justify-start min-w-[290px]">
                                    <div className="flex flex-col items-center w-full md:items-start md:w-fit lg:items-center lg:w-full">
                                        <div className="mb-4">
                                            <strong className="text-3xl font-primary">
                                                $ {formatNumberWithDots(product.price)}
                                            </strong>
                                        </div>
                                        <ProductQuantitySelector
                                            number={numberOfItems}
                                            setNumber={setNumberOfItems}
                                            limit={product.stock}
                                            isNumberOfItemsUpdating={isNumberOfItemsUpdating}
                                            setIsNumberOfItemsUpdating={setIsNumberOfItemsUpdating}
                                            idProduct={idProduct}
                                            idUser={loggedUser.id}
                                        />
                                        {/* STOCK INFORMATION */}
                                        {product.stock < 50 && (
                                            <div
                                                className={
                                                    "mb-4 mt-2 text-sm " +
                                                    (product.stock === 0 && "text-red-600")
                                                }
                                            >
                                                {product.stock === 0
                                                    ? "No quedan unidades de este producto"
                                                    : product.stock === 1
                                                        ? "¡Queda solo 1 unidad!"
                                                        : `¡Quedan solo ${product.stock} unidades!`}
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 lg:flex lg:flex-col lg:items-center lg:w-full">
                                        {/* BUY BUTTONS */}
                                        {product.stock !== 0 ? (
                                            <>
                                                <Button
                                                    variant="primary"
                                                    onClick={handleBuyNow}
                                                    className="w-full lg:w-[80%]"
                                                >
                                                    ¡Comprar ahora!
                                                </Button>
                                                {isInCart ? (
                                                    <Button
                                                        variant="danger"
                                                        title="Ya tienes este producto en el carro"
                                                        onClick={() =>
                                                            onDeleteProductCart({ user: loggedUser, id: idProduct })
                                                        }
                                                        className="w-full lg:w-[80%] my-4"
                                                    >
                                                        Eliminar del carro
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="secondary"
                                                        title="Agregar al carrito"
                                                        onClick={onAddProductCart}
                                                        className="w-full lg:w-[80%] my-4"
                                                    >
                                                        Agregar al carro
                                                    </Button>
                                                )}
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* END OF PRODUCT DETAILS */}

                    {/* PRODUCT DESCRIPTION AND SIMILAR PRODUCTS */}
                    <div className="mb-[100px]">
                        <section id="description" className="mb-[50px]">
                            <h2 className="text-lg font-primary font-bold uppercase mb-2">Descripción</h2>
                            <p className="first-letter:capitalize">{product.description}</p>
                        </section>
                        <section>
                            <h2 className="text-lg font-primary font-bold uppercase mb-2">
                                Productos similares
                            </h2>
                            <FeaturedContainer
                                bestSellersContainer={false}
                                similarProductsContainer={true}
                                similarProductsContainerOptions={{
                                    currentId: product.idProduct,
                                    limit: 4,
                                    category: product.category,
                                    color: product.color,
                                }}
                            />
                        </section>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Detail

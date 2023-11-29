import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { productById } from '@redux/actions/Products/productById'
import { getBestSellers } from '@redux/actions/Products/getBestSellers'
import { setCart } from '@redux/actions/Cart/setCart'
import { postFavorites } from '@redux/actions/Favorites/postFavorites'
import { cleanProductDetail } from '@redux/actions/Products/cleanProductDetail'
import { useCart } from '@hooks/useCart'

import './Detail.Module.css'
import Swal from 'sweetalert2'
import { Bag, Star } from '../../components/SVG'
import DeleteButton from '@components/DeleteButton/DeleteButton'
import UpdateButton from '@components/UpdateButton/UpdateButton'
import FeaturedContainer from '@components/FeaturedContainer/FeaturedContainer'


function Detail() {


    // GLOBAL STATES:
    const loggedUser = useSelector((state) => state.user);
    const product = useSelector((state) => state.detail);

    // CONST:
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { idProduct } = useParams();
    // const cart = useSelector((state) => state.cart)
    const { addToCart } = useCart();

    // LOCAL STATES:
    const [isValidQuantity, setIsValidQuantity] = useState(true);
    const [error, setError] = useState('');
    const [added, setAdded] = useState(false);
    const [addedBuy, setAddedBuy] = useState(false);
    const [addProduct, setAddProduct] = useState({
        id: idProduct,
        quantity: 1,
        name: product.name,
        image: product.image,
        price: product.price,
        stock: product.stock
    });


    // FUNCTIONS:
    const handleInputChange = (event) => {
        const { value } = event.target;
        const parsedValue = Number(value);

        if (value === '' || isNaN(parsedValue) || parsedValue < 1) {
            setAddProduct((prevProduct) => ({
                ...prevProduct,
                quantity: ''
            }));
            setError('Ingrese una cantidad válida');
            setIsValidQuantity(false);
        } else if (parsedValue > product.stock) {
            setError('Stock no disponible');
            setIsValidQuantity(false);
        } else {
            setAddProduct((prevProduct) => ({
                ...prevProduct,
                quantity: parsedValue
            }));
            setError('');
            setIsValidQuantity(true);
        };
    };

    const addFavorite = () => {
        if (Object.keys(loggedUser).length !== 0) {
            const data = {
                idUser: loggedUser.id,
                idProduct
            };

            dispatch(postFavorites(data))
                .then((response) => {
                    if (response === 'existe') {
                        Swal.fire('Ya exite este producto en favoritos');
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: 'Producto agregado a favoritos',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    };
                })
                .catch((error) => {
                    console.log('error productCart', error);
                });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Debes estar logueado para agregar favoritos'
            });
        };
    };

    const renderStars = (rating) => {
        // const MAX_STARS = 5
        const stars = []

        // Generar estrellas llenas
        for (let i = 1; i <= rating; i++) {
            stars.push(
                <Star index={i} />
            );
        };
        return <div className="stars-container">{stars}</div>
    };

    const shopCart = () => {
        if (isValidQuantity) {
            addToCart({
                product: {
                    id: addProduct.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    stock: product.stock
                },
                quantity: addProduct.quantity
            });
            setAddProduct({
                id: idProduct,
                quantity: 1,
                name: product.name,
                image: product.image,
                price: product.price,
                stock: product.stock
            });
            setAddedBuy(true);
        };
    };

    const handleAddToCart = () => {
        if (isValidQuantity) {
            addToCart({
                product: {
                    id: addProduct.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    stock: product.stock
                },
                quantity: addProduct.quantity
            });
            setAddProduct({
                id: idProduct,
                quantity: 1,
                name: product.name,
                image: product.image,
                price: product.price,
                stock: product.stock
            });

            setAdded(true);
        } else {
            Swal.fire('Ingrese una cantidad válida');
        };
    };


    // LIFE CYCLES:
    useEffect(() => {
        if (added) {
            dispatch(setCart(addProduct));
            Swal.fire('Producto agregado al carrito');
            console.log('addProduct', addProduct);
            setAdded(false);
        };
        if (addedBuy) {
            dispatch(setCart(addProduct));
            setAddedBuy(false);
            navigate('/cart');
        };
    }, [added, addedBuy]);

    useEffect(() => {
        dispatch(productById(idProduct));
        dispatch(getBestSellers());
        dispatch(cleanProductDetail());
    }, [dispatch, idProduct]);


    // COMPONENT:
    return (
        <main className="flex items-center justify-center bg-softWhite">
                {
                Object.keys(product).length === 0
                    ? <img
                        src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif"
                        alt="loading"
                        className="w-94 h-94 "
                    />
                    : <section>
                        <div className="container mx-auto px-4">
                            {/* BREADCRUMB */}
                            <div className="flex">
                                <ol role="list" className="flex items-center">
                                    <li className="text-left">
                                        <div className="-m-1">
                                            <a
                                                href="/"
                                                className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                            >
                                                Inicio
                                            </a>
                                        </div>
                                    </li>
                                    <li className="text-left">
                                        <div className="flex items-center">
                                            <span className="mx-2 text-gray-400">/</span>
                                            <div className="-m-1">
                                                <a
                                                    href="/products"
                                                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                                >
                                                    Productos
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="text-left">
                                        <div className="flex items-center">
                                            <span className="mx-2 text-gray-400">/</span>
                                            <div className="-m-1">
                                                <a
                                                    href="/products"
                                                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                                    aria-current="page"
                                                >
                                                    {product?.category}
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            {/* CONTENT */}
                            <div className="lg:col-gap-12 mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:mt-12 lg:grid-cols-2 lg:gap-10 xl:col-gap-16">
                                <div className="lg:col-span-3 lg:row-end-1">
                                    <div className="lg:flex lg:items-start">
                                        <div className="lg:order-2 lg:ml-5">
                                            <div className="max-w-xl overflow-hidden rounded-lg">
                                                <img
                                                    className="w-full h-80 max-w-full object-cover"
                                                    src={product?.image}
                                                    alt={product?.name}
                                                />

                                            </div>
                                        </div>
                                        <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0"></div>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 ">
                                    <p
                                        className=" mt-2 ml-auto text-sm font-medium text-right text-blue-500 cursor-pointer m-5 hover:text-red-500"
                                        onClick={addFavorite}
                                    >

                                        Agregar a Favoritos 🤍
                                    </p>
                                    <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                                        {product?.name}
                                    </h1>
                                    <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
                                        Marca:
                                        {product?.patent}
                                    </p>
                                    <div className="mt-5 flex items-center">
                                        <div className="flex items-center mt-2">
                                            <div className="rating-stars flex mr-3">
                                                {renderStars(product?.rating)}
                                            </div>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-auto ">
                                            {product?.rating}
                                        </span>
                                    </div>
                                    {/* <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
                3 Reviews
              </p> */}
                                    <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
                                        Presentación:
                                        {product?.package}
                                    </p>
                                    <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
                                        Color:
                                        {product?.color}
                                    </p>
                                    <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
                                        Stock disponible:
                                        {product?.stock}
                                    </p>
                                    <div className=" flex items-end justify-start gap-2 sm:flex-row sm:space-y-0">
                                        <div className="flex flex-col">
                                            <label
                                                htmlFor="quantity"
                                                className=" mt-2 ml-2 text-sm font-medium text-gray-500"
                                            >
                                                Cantidad
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="cantidad"
                                                name="quantity"
                                                value={addProduct.quantity}
                                                onChange={handleInputChange}
                                                className=" flex items-center justify-center p-2 my-2 h-11 w-24 rounded border-indigo-800 border-solid border-2"
                                            />
                                        </div>
                                        <div className="w-20 h-14 flex items-center justify-center">
                                            {error && (
                                                <p className="text-sm font-semibold text-red-800">
                                                    {error}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-10 flex flex-col grid-cols-2 gap-2 items-center justify-between space-y-3 border-t border-b py-4 sm:flex-row sm:space-y-0">
                                        <div className="flex items-end">
                                            <h1 className="text-3xl font-bold">$ {product?.price}</h1>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {
                                                product.stock > 0 ? (
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {console.log('product.stock', product.stock)}
                                                        <button
                                                            type="button"
                                                            disabled={!isValidQuantity}
                                                            className={`flex items-center justify-center rounded-md border-2 border-transparent bg-purple-100 bg-none text-center text-base font-bold text-purple-800 transition-all duration-200 ease-in-out focus:shadow ${isValidQuantity
                                                                ? 'hover:bg-purple-200'
                                                                : 'cursor-not-allowed'
                                                                }`}
                                                            onClick={Object.keys(loggedUser).length !== 0 ? handleAddToCart : () => { navigate('/login') }}
                                                        >
                                                            Agregar al carrito
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={`inline-flex items-center justify-center rounded-md border-2 border-transparent bg-purple-800 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow ${isValidQuantity
                                                                ? 'hover:bg-gray-800'
                                                                : 'cursor-not-allowed'
                                                                }`}
                                                            onClick={Object.keys(loggedUser).length !== 0
                                                                ? shopCart
                                                                : () => { navigate('/login') }}
                                                            disabled={!isValidQuantity}
                                                        >
                                                            <Bag />
                                                            Comprar
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <p> Producto sin Stock </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-3">
                                <div className="border-b border-gray-300">
                                    <h3 className=" py-4 text-sm font-medium text-gray-900" >
                                        Descripcion del Producto
                                    </h3>
                                </div>
                            </div>
                            <div className="mt-4 mb-4 flow-root sm:mt-4">
                                <p className="mt-2 mb-2">{product?.description}</p>
                            </div>
                            {/* RENDERIZADO CONDICIONAL BOTONES ADMIN */
                                (loggedUser.rol === 'admin') ? (
                                    <div className="flex justify-end">
                                        <DeleteButton idProduct={idProduct} />
                                        <UpdateButton idProduct={idProduct} />
                                    </div>
                                ) : null
                            }
                        </div>
                        <div>
                            <FeaturedContainer />
                        </div>
                    </section>
            }
        </main>
    );
};


export default Detail;
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { productById } from '@redux/actions/Products/productById'
import { getBestSellers } from '@redux/actions/Products/getBestSellers'
import { setCart } from '@redux/actions/Cart/setCart'
import { postFavorites } from '@redux/actions/Favorites/postFavorites'
import { cleanProductDetail } from '@redux/actions/Products/cleanProductDetail'
import { useCart } from '@hooks/useCart'

import Swal from 'sweetalert2'
import { Bag, Star, Plus, Minus } from '../../components/SVG'
import DeleteButton from '@components/DeleteButton/DeleteButton'
import UpdateButton from '@components/UpdateButton/UpdateButton'
import FeaturedContainer from '@components/FeaturedContainer/FeaturedContainer'


function Detail() {


    // GLOBAL STATES:
    const loggedUser = useSelector((state) => state.user);
    const product = useSelector((state) => state.detail);


    // CONSTANTS:
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
    const [numberOfItems, setNumberOfItems] = useState(0);

    // DEV MODE:
    const [productMock, setProductMock] = useState({});


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

    // Formatea el precio del producto como una string e inserta puntos (.) cada 3 dígitos para seguir el formato de precios argentinos.
    function formatNumberWithDots(number) {
        // Convierte el número a una string.
        let numStr = number.toString();

        // Usar un Regex para instertar 3 puntos (.) cada 3 dígitos empezando de la derecha.
        numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return numStr;
    };

    const handleNumberOfItems = (event) => {
        const { value } = event.target;
        if (value === '' || (!isNaN(value) && parseInt(value) >= 0 && parseInt(value) <= 999)) {
            setNumberOfItems(value);
        };
        return;
    };

    // Se basa en el rating del producto para renderizar las estrellas.
    const renderStars = (value) => {
        const max = 5;
        const percentage = Math.round((value / max) * 100);

        return (
            <div className="relative flex items-center gap-1 mr-2 fill-orange">
                {
                    Array.from(Array(max).keys()).map((_, idx) => (
                        <Star key={idx} />
                    ))
                }
                <div className="absolute top-0 right-0 bottom-0 z-10 bg-black mix-blend-color" style={{ width: `${100 - percentage}%` }} />
            </div>
        );
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

    // PRODUCTION:
    // useEffect(() => {
    //     dispatch(productById(idProduct));
    //     dispatch(getBestSellers());
    //     dispatch(cleanProductDetail());
    // }, [dispatch, idProduct]);


    // DEV MODE: Solo para evitar peticiones al servidor.
    useEffect(() => {
        // console.log(product);
        // localStorage.setItem("productMock", JSON.stringify(product));
        const product = localStorage.getItem("productMock");
        setProductMock(JSON.parse(product));
    }, []);


    // COMPONENT:
    return (
        <main className="flex flex-col justify-center p-whiteSpaceTop bg-softWhite">
            {
                Object.keys(productMock).length === 0 ? (
                    <img
                        src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif"
                        alt="cargando"
                        className="w-94 h-94 "
                    />
                ) : (
                    <div className="flex flex-col gap-8 max-w-[1920px] w-full px-[3.5%]">
                        <div>Home / products / exterior</div>
                        <div className="flex justify-between gap-8 w-full">
                            <section>
                                <img src={productMock.image} className="w-[300px] rounded-[1rem]" />
                            </section>

                            <section className="flex flex-col border-black w-[calc(100%-300px)]">
                                <div className="flex flex-col mb-4">
                                    <a className="relative z-0 w-fit px-[1%] py-[.25%] before:content-[''] before:-z-10 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:rounded-[15px] before:bg-black text-white text-sm">{productMock.category}</a>
                                    <h1 className="mt-2 text-3xl font-bold uppercase">{productMock.name}</h1>
                                    <a className="text-lg">Ver más productos de <u className="text-primary uppercase cursor-pointer">{productMock.patent}</u></a>
                                </div>
                                <div className="flex justify-between">
                                    <div className="w-[60%]">
                                        <div className="flex items-center mb-4">
                                            {
                                                renderStars(productMock.rating)
                                            }
                                            <span className="mr-4 leading-none font-bold">{productMock.rating}</span>
                                            <span className="text-primary underline cursor-pointer">
                                                {
                                                    true ? (
                                                        // "renderizar verdadera cantidad de reseñas"
                                                        "1234 reseñas"
                                                    ) : (
                                                        "Deja la primera reseña"
                                                    )
                                                }
                                            </span>
                                        </div>
                                        <h2 className="text-lg font-bold uppercase mb-2">Descripción general</h2>
                                        <div className="p-4 bg-turquoise text-white rounded-[1rem]">
                                            <ul className="text-lg">
                                                <li>Tamaño del envase: {productMock.package}</li>
                                                <li>Color: {productMock.color}</li>
                                                <li><u className="cursor-pointer">Ver más</u></li>
                                            </ul>
                                        </div>
                                        <div>
                                            Disponible en tienda
                                        </div>
                                        <div>
                                            Envío a domicilio
                                        </div>
                                        <div>
                                            Necesitas ayuda?
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center w-[40%]">
                                        <div className="mb-8"><strong className="text-5xl">${formatNumberWithDots(productMock.price)}</strong></div>
                                        <div className="flex flex-col mb-4 border border-black rounded-lg text-lg h-fit">
                                            <div className="flex">
                                                <button><Minus /></button>
                                                <input
                                                    value={numberOfItems}
                                                    onChange={(e) => handleNumberOfItems(e)}
                                                    type="text"
                                                    inputMode="numeric"
                                                    maxLength={4}
                                                    step={1}
                                                    min={0} max={999}
                                                    className="bg-transparent text-center w-14 p-3"
                                                />
                                                <button><Plus /></button>
                                            </div>
                                        </div>
                                        <button className="w-[80%] mb-2 p-4 bg-orange rounded-[2rem] text-white text-lg font-bold">¡Comprar ahora!</button>
                                        <button className="w-[80%] mb-2 p-4 box-border border-[.15rem] border-primary rounded-[2rem] text-lg font-bold">Agregar al carro</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )
            }
        </main>
    );
};


export default Detail;
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

    useEffect(() => {
        console.log(product)
    }, [product]);


    // COMPONENT:
    return (
        <main className="flex flex-col justify-center p-whiteSpaceTop bg-softWhite">
            {
                Object.keys(product).length === 0 ? (
                    <img
                        src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif"
                        alt="cargando"
                        className="w-94 h-94 "
                    />
                ) : (
                    <>

                        <div>Home / products / exterior</div>
                        <div className="flex w-full">
                            <section >
                                <img src={product.image} className="w-[300px]" />
                            </section>
                            <section>
                                <a className="block">{product.patent}</a>
                                <a className="block">{product.category}</a>
                                <h1>{product.name}</h1>
                                <h2>Calificación: {product.rating}</h2>
                                <div>
                                    <p>Tamaño del envase: {product.package}</p>
                                    <p>Color: {product.color}</p>
                                    <u>Ver más</u>
                                </div>
                            </section>
                            <section>
                                <div>{product.price}</div>
                                <div>
                                    <span>-</span>
                                    <span>0</span>
                                    <span>+</span>
                                </div>
                                <button>Agregar al carrito</button>
                            </section>
                        </div>
                    </>
                )
            }
        </main>
    );
};


export default Detail;
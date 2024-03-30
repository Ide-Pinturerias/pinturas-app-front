import axios from "axios"
import { BASE_URL, SET_CART } from "@redux/action-type"
import { GetSpecificProducts } from "@api"

export const updateQuantity = (idUser, newQuantity, productToChange) => async (dispatch) => {
    try {
        const data = await GetSpecificProducts([productToChange])
        // Chequear si hay disponibilidad en el backend.
        // *solo se espera recibir un producto en el array.
        if (data?.[0]?.stock >= newQuantity) {
            try {
                const productsLocal = localStorage.getItem("productsLocal");
                if (productsLocal !== null) {
                    const { id } = productToChange
                    const parsedProductsLocal = JSON.parse(productsLocal);
                    const index = parsedProductsLocal.findIndex((prod) => prod.id.toString() === id.toString());

                    // LocalStorage: Si se encontró el ID en el carro, actualizar "quantity".
                    if (index !== -1) {
                        parsedProductsLocal[index].quantity = newQuantity;
                        localStorage.setItem("productsLocal", JSON.stringify(parsedProductsLocal))

                        if (!idUser) return;

                        // Si hay usuario, actualizar DB.
                        const cart = (await axios.put(`${BASE_URL}carts`, {
                            idUser,
                            products: JSON.stringify(parsedProductsLocal)
                        })).data
                        console.log(cart)// TODO ver re renderizado, peticion x3 al ingresar a la vista
                        dispatch({ type: SET_CART, payload: cart })
                    }
                }
            } catch (error) {
                console.log(`Error trying to access productsLocal: ${error}`)
            }
        }

    } catch (error) {
        console.log(`Error trying to dispatch updateQuantity: ${error}`)
        throw Error
    }
}

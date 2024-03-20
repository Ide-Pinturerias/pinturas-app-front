import axios from "axios"
import { BASE_URL } from "@redux/action-type"
import { GetSpecificProducts } from "@api"

export const updateQuantity = (idUser, newQuantity, productToChange) => async (dispatch) => {
    try {

        const data = await axios.put(GetSpecificProducts, productToChange).data
        // Chequear si hay disponibilidad en el backend.
        // *solo se espera recibir un producto en el array.
        if (data && data[0] && data[0]?.stock <= newQuantity) {
            // localStorage.setItem('productsLocal', JSON.stringify(products))
            const productsLocal = localStorage.getItem("productsLocal");
            if (productsLocal !== null) {
                const { id, quantity } = productToChange
                try {
                    const parsedProductsLocal = JSON.parse(productsLocal);
                    const index = parsedProductsLocal.findIndex((prod) => prod.id === id);

                    // Si se encontró el ID en el carro, actualizar "quantity".
                    if (index !== -1) {
                        parsedProductsLocal[index].quantity = newQuantity;
                        localStorage.setItem("productsLocal", JSON.stringify(parsedProductsLocal))

                        if (!idUser) return;

                        // Si hay usuario, actualizar DB.
                        const cart = await axios.put(`${BASE_URL}carts`, {
                            idUser,
                            products: JSON.stringify(parsedProductsLocal)
                        }).data
                        dispatch({ type: "UPDATE_QUANTITY", payload: cart })
                    }
                } catch (error) {
                    console.log(`Enviar error al usuario: ${error}`)
                }
            }
        }

        // Actualizar local storage:
    } catch (error) {

    }
}
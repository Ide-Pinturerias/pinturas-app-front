import React from "react";
import { deleteProduct } from "../../redux/actions/deleteProduct";
import { useDispatch } from "react-redux";


const DeleteButton = ({idProduct}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteProduct(idProduct));
        alert('Borrado de producto:' + idProduct)
    }

    return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-warning rounded-xl w-40 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Borrar producto</button>
        </div>
    );
}

export default DeleteButton;
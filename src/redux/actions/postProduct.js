import axios from "axios";
import { POST_PRODUCT, BASE_URL } from '../action-type';

export const postProduct = (productCreate) => {
    return async (dispatch) => {
        console.log(productCreate);
        const response = await axios.post(`${BASE_URL}products`, productCreate, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        } )
        const newProduct = response.status === 'success' ? response.product : {};
        dispatch({ type: POST_PRODUCT, payload: newProduct });
        return response;
    };
};


// 'upload_file', formData, {
//             headers: {
//             'Content-Type': 'multipart/form-data'
//             }
//         }
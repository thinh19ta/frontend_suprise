import axios from "axios"
import '../constants/AppConstants'
import AppConstants from "../constants/AppConstants";

const home_url = AppConstants.HOME_PATH
const url = `${home_url}/cart`

class CartService {
    getCartByAccountId(accountId) {
        return axios.get(`${url}/${accountId}`)
    }

    addCart(cartProductRequest) {
        return axios.post(url, cartProductRequest)
    }

    removeProduct(cartProductRequest) {
        const config = {
            data: cartProductRequest
        }
        return axios.delete(url, config)
    }

    updateProductQuantity(cartProductRequest) {
        return axios.put(url, cartProductRequest);
    }

    // removeCart(accountId){
    //     return axios.delete(`${url}/${accountId}`)
    // }
}

const CartServiceInstance = new CartService();
export default CartServiceInstance;
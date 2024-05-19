import axios from "axios"
import '../constants/AppConstants'
import AppConstants from "../constants/AppConstants";

const home_url = AppConstants.HOME_PATH
const url = `${home_url}/cart`

class CartService {
    getCartByAccountId(accountId) {
        return axios.get(`${url}/${accountId}`)
    }

    addCart(cartRequest) {
        return axios.post(url)
    }

    removeProduct(cartRequest) {
        return axios.delete(url)
    }
}

const CartServiceInstance = new CartService();
export default CartServiceInstance;
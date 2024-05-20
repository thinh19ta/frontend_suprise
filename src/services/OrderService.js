import axios from "axios"
import '../constants/AppConstants'
import AppConstants from "../constants/AppConstants";

const home_url = AppConstants.HOME_PATH
const url = `${home_url}/order`

class OrderService {
    addOrder(orderData) {
        return axios.post(url, orderData) 
    }
}

const OrderServiceInstance = new OrderService();
export default OrderServiceInstance;
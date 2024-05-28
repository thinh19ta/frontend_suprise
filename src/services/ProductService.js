import axios from "axios";
import '../constants/AppConstants'
import AppConstants from "../constants/AppConstants";

const home_url = AppConstants.HOME_PATH
const url = `${home_url}/products`

class ProductService {
    getProductById(id) {
        return axios.get(`${url}/${id}`)
    }

    getAllProducts() {
        return axios.get(url)
    }

    getRandomProducts(length) {
        return axios.get(`${url}/random/${length}`)
    }

    getAllProductsByCategory(categoryId) {
        return axios.get(`${url}/category/${categoryId}`)
    }
}

const productServiceInstance = new ProductService();
export default productServiceInstance;